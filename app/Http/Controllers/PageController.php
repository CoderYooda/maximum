<?php

namespace App\Http\Controllers;

use App\Models\Common\Action;
use App\Models\Common\Client;
use App\Models\Common\Employee;
use App\Models\Common\Feedback;
use App\Models\Common\News;
use App\Models\Common\Vacancy;
use App\Models\Front\Page;
use App\Models\Shop\Category;
use App\Models\Shop\Product;
use Carbon\Carbon;
use Illuminate\Http\Request;
use File;

use Intervention\Image\Facades\Image;

class PageController extends Controller
{

    private $template = 'maximum';

    public function page(Request $request, $slug = '/')
    {
        setlocale(LC_TIME, 'ru_RU');
        Carbon::setLocale('ru');
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
                $html = str_replace('[[description]]', $target_category->description, $html);
                $view = view('shop.products', compact('categories','products', 'path', 'target_category'))->render();
            } else {
                $categories = Category::where('parent_id', 0)->with('images')->get();
                $view = view('shop.catalogue', compact('categories', 'path'))->render();
            }
            $html = str_replace('[[shop_categories]]', $view, $html);
        }

        if(strpos($html, '[[feedback]]')){
            $feedbacks = Feedback::where('isPublished', true)->with('images')->get();
            $view = view('aboutus.feedback', compact('feedbacks'))->render();
            $html = str_replace('[[feedback]]', $view, $html);
        }

        if(strpos($html, '[[clients]]')){
            $clients = Client::where('isPublished', true)->with('images')->get();
            $view = view('aboutus.clients', compact('clients'))->render();
            $html = str_replace('[[clients]]', $view, $html);
        }

        if(strpos($html, '[[employee]]')){
            $employees = Employee::where('isPublished', true)->with('images')->get();
            $view = view('aboutus.employees', compact('employees'))->render();
            $html = str_replace('[[employee]]', $view, $html);
        }

        if(strpos($html, '[[vacancy]]')){
            $vacancies = Vacancy::where('isPublished', true)->get();
            $view = view('aboutus.vacancies', compact('vacancies'))->render();
            $html = str_replace('[[vacancy]]', $view, $html);
        }

        if(strpos($html, '[[product]]')){

            $reverted = array_reverse($slug);
            foreach($reverted as $index => $cat){

            }
            $product = Product::where('isPublished', true)->where('slug', end($slug))->first();
            $html = str_replace('[[title]]', $product->title, $html);
            $html = str_replace('[[description]]', $product->description, $html);
            $view = view('shop.product', compact('product'))->render();
            $html = str_replace('[[product]]', $view, $html);
        }

        if(strpos($html, '[[news]]')){
            $news = News::where('isPublished', true)->with('images')->orderBy('created_at', 'DESC')->paginate(5);
            $view = view('information.news', compact('news'))->render();
            $html = str_replace('[[news]]', $view, $html);
        }
        if(strpos($html, '[[new]]')){
            $reverted = array_reverse($slug);
            foreach($reverted as $index => $cat){

            }
            $new = News::where('isPublished', true)->where('slug', end($slug))->first();
            $html = str_replace('[[title]]', $new->title, $html);
            $html = str_replace('[[description]]', $new->description, $html);
            $view = view('information.new', compact('new'))->render();
            $html = str_replace('[[new]]', $view, $html);
        }

        if(strpos($html, '[[actions]]')){
            $actions = Action::where('isPublished', true)->with('images')->orderBy('created_at', 'DESC')->get();
            $view = view('information.actions', compact('actions'))->render();
            $html = str_replace('[[actions]]', $view, $html);
        }

        $html = str_replace('[[title]]', $page->title, $html);
        $html = str_replace('[[description]]', $page->description, $html);

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
