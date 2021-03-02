<?php

namespace App\Models\Front;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $table = 'pages';

    protected $guarded = [];

    public $rels = ['texts','images'];

    public $fields = ['slug', 'title', 'description', 'isPublished', 'menu', 'name', 'parent'];

    public function modules()
    {
        return $this->belongsToMany(Module::class, 'pages_modules', 'page_id', 'module_id')->with(['texts','images', 'template']);
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
                if($splitted[0] === 'text'){
                    $text = $module[$splitted[0] . 's'][(int)$splitted[1] - 1]->text;
                    $raw_html = str_replace("[[" . $tag . "]]", $text, $raw_html);
                }
                if($splitted[0] === 'image'){
                    $img = $module[$splitted[0] . 's'][(int)$splitted[1] - 1];
//                    $width = $img['width'];
//                    $height = $img['height'];
                    $url = $img->image->url;
                    $img = '<img src="' . $url . '">';
                    $raw_html = str_replace("[[" . $tag . "]]", $img, $raw_html);
                }
            }
            $html_finish .= $raw_html;
        }
        $this->html = $html_finish;
    }
}
