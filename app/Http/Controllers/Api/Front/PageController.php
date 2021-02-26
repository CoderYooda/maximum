<?php

namespace App\Http\Controllers\API\Front;

use App\Http\Controllers\Controller;
use App\Models\Front\Page;
use Illuminate\Http\Request;

class PageController extends Controller
{
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
}
