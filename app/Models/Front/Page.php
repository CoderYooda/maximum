<?php

namespace App\Models\Front;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $table = 'pages';

    protected $guarded = [];

    public $rels = ['texts','images','links','backgrounds'];

    public $fields = ['slug', 'title', 'description', 'isPublished', 'menu', 'name', 'parent'];

    public function modules()
    {
        return $this->belongsToMany(Module::class, 'pages_modules', 'page_id', 'module_id')->with(['texts','images','links','backgrounds','template']);
    }

    public function generateHtml()
    {
        $modules = $this->modules;
        $html_finish = '';
        foreach($modules as $module){
            $html = str_split($module->template->html);
            $raw_html = $module->template->html;
            $tags = [];
            for($i = 0; $i < count($html); $i++){
                if($html[$i] === "[" && $html[$i+1] === "["){
                    $tag_index = $i+2;
                    $tag = '';
                    while ($html[$tag_index] !== ']'){
                        $tag .= $html[$tag_index];
                        $tag_index++;
                    }
                    $tags[] = $tag;
                }
            }

            foreach($tags as $tag){
                $splitted = explode("|" , $tag);
                $params = isset($splitted[2]) ? json_decode($splitted[2]) : null;


                if($splitted[0] === 'text'){

                    $text = isset($module[$splitted[0] . 's'][(int)$splitted[1] - 1]) ? $module[$splitted[0] . 's'][(int)$splitted[1] - 1]->text : '';


//                    $text = $module[$splitted[0] . 's'][(int)$splitted[1] - 1]->text;
                    $raw_html = str_replace("[[" . $tag . "]]", $text, $raw_html);
                }

                if($splitted[0] === 'link'){

                    $text = isset($module[$splitted[0] . 's'][(int)$splitted[1] - 1]) ? $module[$splitted[0] . 's'][(int)$splitted[1] - 1]->text : 'Ссылка';
                    $link = isset($module[$splitted[0] . 's'][(int)$splitted[1] - 1]) ? $module[$splitted[0] . 's'][(int)$splitted[1] - 1]->link : '#';

                    $class = $params !== null && isset($params->class) ? $params->class : '';

                    $raw_html = str_replace("[[" . $tag  . "]]", '<a class="' . $class . '" href="' . $link . '">' . $text . '</a>', $raw_html);
                }
                if($splitted[0] === 'image'){
                    $img_c = $module[$splitted[0] . 's'];


                    $img = isset($img_c[(int)$splitted[1] - 1]) ? $img_c[(int)$splitted[1] - 1] : null;

                    if($img !== null){
                        $url = $img->image->url;
                        $img = '<img src="' . $url . '">';
                    } else {
                        $img = '<img src="/images/noimage.jpg">';
                    }


                    $raw_html = str_replace("[[" . $tag . "]]", $img, $raw_html);
                }

                if($splitted[0] === 'background'){
                    $img_c = $module[$splitted[0] . 's'];
                    $img = isset($img_c[(int)$splitted[1] - 1]) ? $img_c[(int)$splitted[1] - 1] : null;
                    if($img !== null){
                        $url = $img->image->url;
                    } else {
                        $url = '/images/noimage.jpg';
                    }
                    $html = str_split($raw_html);
                    $pos = strpos($raw_html, "[[" . $tag . "]]");


                    $t = [];
                    $i = $pos - 1;
                    while (isset($html[$i])){
                        $t[] = $html[$i];
                        if($html[$i] === '<'){
                            break;
                        }
                        $i--;
                    }

                    $prev_tag = implode(array_reverse($t));
                    $prepared_tag = str_replace('bg_' . (int)$splitted[1] . '_place', 'style="background-image: url(' . $url . ')"', $prev_tag);

                    $raw_html = str_replace("[[" . $tag . "]]", '', $raw_html);
                    $raw_html = str_replace($prev_tag, $prepared_tag, $raw_html);
                }

            }
            $html_finish .= $raw_html;
        }
        $this->html = $html_finish;
    }
}
