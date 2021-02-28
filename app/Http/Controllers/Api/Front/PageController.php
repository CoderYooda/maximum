<?php

namespace App\Http\Controllers\API\Front;

use App\Http\Controllers\Controller;
use App\Models\Front\Module;
use App\Models\Front\ModuleTemplate;
use App\Models\Front\Page;
use App\Models\Front\Parts\Image;
use App\Models\Front\Parts\Text;
use Illuminate\Http\Request;

class PageController extends Controller
{
    public function all()
    {
        return response(['pages' => Page::with('modules')->get()]);
    }

    public function get(Request $request, $id)
    {
        $page = Page::with('modules')->whereId($id)->first();

        return response(['page' => $page]);
    }

    public function getContent($type, $id)
    {
        $model = 'App\Models\Front\Parts\\' . ucfirst($type);
        $content = $model::whereId($id)->first();

        return response(['content' => $content]);
    }

    public function store(Request $request)
    {
        $page = new Page();

        $page->fill($request->only($page->fields));

        $page->save();

        $modules_ids = [];

        foreach ($request->modules as $module){

            $m = new Module();
            $m->module_template_id = $module['template']['id'];
            $m->save();

            $modules_ids[] = $m->id;

            foreach ($module['texts'] as $text){
                $txt = isset($text['id']) ? Text::whereId( $text['id'] )->first() : new Text();
                $txt->text = $text['text'];
                $txt->module_id = $m->id;
                $txt->save();
                $m->texts()->save($txt);
            }

            foreach ($module['images'] as $image){
                $img = isset($image['id']) && $image['id'] > 0 ? Image::whereId($image['id'] )->first() : new Image();
                $img->image_id = $image['image_id'];
                $img->module_id = $m->id;
                $img->width = $image['width'];
                $img->height = $image['height'];
                $img->save();
                $m->texts()->save($img);
            }
        }

        $page->modules()->sync($modules_ids);

//        if($request->images)
//            $product->images()->sync(array_column($request->images, 'id'));

        return response(['page' => $page, 'message' => 'Страница "' . $page->name . '" сохранена']);
    }

    public function update(Request $request, $id)
    {
        $page = Page::whereId((int)$id)->first();

        $page->update($request->only($page->fields));

        $modules_ids = [];

        foreach ($request->modules as $module){

            $m = isset($module['id']) ? Module::whereId($module['id'])->first() : new Module();

            $m->module_template_id = $module['template']['id'];

            $m->save();

            $modules_ids[] = $m->id;

            foreach ($module['texts'] as $text){
                $txt = isset($text['id']) ? Text::whereId( $text['id'] )->first() : new Text();
                $txt->text = $text['text'];
                $txt->module_id = $m->id;
                $txt->save();
                $m->texts()->save($txt);
            }

            foreach ($module['images'] as $image){
                $img = isset($image['id']) && $image['id'] > 0 ? Image::whereId($image['id'] )->first() : new Image();
                $img->image_id = $image['image_id'];
                $img->module_id = $m->id;
                $img->width = $image['width'];
                $img->height = $image['height'];
                $img->save();
                $m->texts()->save($img);
            }
        }

        $page->modules()->sync($modules_ids);

        return response(['message' => 'Страница "' . $request->name . '" обновлена']);
    }

    public function getModuleTemplates(Request $request)
    {
        return response(['modules' => ModuleTemplate::get()]);
    }
}
