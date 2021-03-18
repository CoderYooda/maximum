<?php

namespace App\Http\Controllers;

use App\Models\Front\Page;
use App\Models\Shop\Category;
use App\Models\Shop\Product;
use Illuminate\Http\Request;
use File;

class PageController extends Controller
{

    private $template = 'maximum';

    public function page(Request $request, $slug = '/')
    {

        $slug = explode('/', $slug);
        $slug[0] = $slug[0] !== '' ? $slug[0] : '/';
        $path = $slug[0];
        $page = Page::where('slug', $slug[0])->firstOrFail();

        $html = $this->getBaseHTML();
        $html = str_replace('[[content]]', $page->html, $html);
        $html = str_replace('[[token]]', $request->session()->token(), $html);

        if(strpos($html, '[[shop_categories]]')){
            $reverted = array_reverse($slug);
            foreach($reverted as $index => $cat){
                if($cat === 'catalogue'){
                } else {
                    $category = Category::where('slug', $cat)->firstOrFail();
                }
                if(isset($reverted[$index + 1]) && $reverted[$index + 1] !== 'catalogue'){
                    if($category->hasParentWithSlug($reverted[$index + 1]) < 1){
                        abort(404);
                    }
                }
            }
            if(end($slug) !== '' && end($slug) !== 'catalogue' ){
                $target_category = Category::where('slug', end($slug))->with('children', 'images', 'parent')->firstOrFail();
                $path = $target_category->getPath();
                $categories = $target_category->children;
                $products = Product::where('category_id', $target_category->id)->with('images')->get();
                $html = str_replace('[[title]]', $target_category->title, $html);
                $view = view('shop.products', compact('categories','products', 'path', 'target_category'))->render();
            } else {
                $categories = Category::where('parent_id', 0)->with('images')->get();
                $view = view('shop.catalogue', compact('categories', 'path'))->render();
            }
            $html = str_replace('[[shop_categories]]', $view, $html);
        }

        if(strpos($html, '[[product]]')){
            $reverted = array_reverse($slug);
            foreach($reverted as $index => $cat){

            }
            $product = Product::where('slug', end($slug))->first();
            $view = view('shop.product', compact('product'))->render();
            $html = str_replace('[[product]]', $view, $html);
        }

        $html = str_replace('[[title]]', $page->title, $html);

        return $html;
    }

    private function getBaseHTML()
    {
        return File::get(public_path('/templates/' . $this->template . '/index.html'));
    }

    public function callback(Request $request){
        dd($request);
        return response(['success' => true]);
    }
}
