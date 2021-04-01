<?php

namespace App\Http\Controllers\Api\Common;

use App\Http\Controllers\Controller;
use App\Models\Common\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function all()
    {
        return response(News::with('images')->orderBy('created_at', 'DESC')->get());
    }

    public function get($id)
    {
        $category = News::with('images')->whereId($id)->first();

        return $category ?  response(['category' => $category]) : response(['message' => 'Категория не найдена'], 404);
    }

    public function store(Request $request)
    {
        $category = News::create($request->only(['name', 'isPublished', 'content', 'description', 'slug', 'title']));

        $category->image_id = $request->images[0]['id'];
        $category->save();

        return response(['category' => $category, 'message' => 'Категория "' . $category->name . '" сохранена']);
    }

    public function update(Request $request, $id)
    {
        $category = News::whereId((int)$id)->first();

        $category->update($request->only(['name', 'isPublished', 'content', 'description', 'slug', 'title']));
        $category->image_id = $request->images[0]['id'];
        $category->save();

        return response(['message' => 'Категория "' . $request->name . '" обновлена']);
    }

    public function delete(Request $request)
    {
        $category = News::create($request->only(['name', 'isPublished', 'content', 'description', 'slug', 'title']));

        return response(['message' => 'Категория "' . $category->name . '" сохранена']);
    }
}
