<?php

namespace App\Http\Controllers;

use App\Models\Front\Page;
use Illuminate\Http\Request;
use File;

class PageController extends Controller
{

    private $template = 'maximum';

    public function page(Request $request, $slug)
    {
        $page = Page::where('slug', $slug)->first();
        $base_html = $this->getBaseHTML();

        $html = str_replace('[[content]]', $page->html, $base_html);
        return $html;
    }

    private function getBaseHTML()
    {
        return File::get(public_path('/templates/' . $this->template . '/index.html'));
    }
}
