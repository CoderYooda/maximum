<?php

namespace App\Http\Controllers\Api\Common;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Common\Article;

class ArticleController extends Controller
{
    public function all()
    {
        return response(Article::with('images')->get());
    }

    public function get($id)
    {
        $category = Article::with('images')->whereId($id)->first();

        return $category ?  response(['category' => $category]) : response(['message' => 'Категория не найдена'], 404);
    }

    public function store(Request $request)
    {
        $category = Article::create($request->only(['name', 'isPublished', 'content', 'description', 'slug', 'title']));

        $category->image_id = $request->images[0]['id'];
        $category->save();

        return response(['category' => $category, 'message' => 'Категория "' . $category->name . '" сохранена']);
    }

    public function update(Request $request, $id)
    {
        $category = Article::whereId((int)$id)->first();

        $category->update($request->only(['name', 'isPublished', 'content', 'description', 'slug', 'title']));
        $category->image_id = $request->images[0]['id'];
        $category->save();

        return response(['message' => 'Категория "' . $request->name . '" обновлена']);
    }

    public function delete(Request $request)
    {
        $category = Article::create($request->only(['name', 'isPublished', 'content', 'description', 'slug', 'title']));

        return response(['message' => 'Категория "' . $category->name . '" сохранена']);
    }
}
