<?php

namespace App\Http\Controllers\Api\Shop;

use App\Http\Controllers\Controller;
use App\Http\Requests\Store\Category\DeleteCategoryRequest;
use App\Http\Requests\Store\Category\StoreCategoryRequest;
use App\Models\Shop\Category;
use Illuminate\Http\Request;

class CategoryController extends Controller
{
    public function all()
    {
        return response(Category::with('images', 'parent')->get());
    }

    public function get($id)
    {
        $category = Category::with('images', 'parent')->whereId($id)->first();

        return $category ?  response(['category' => $category]) : response(['message' => 'Категория не найдена'], 404);
    }

    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create($request->validated());

        if($request->images)
            $category->images()->sync(array_column($request->images, 'id'));

        return response(['category' => $category, 'message' => 'Категория "' . $category->name . '" сохранена']);
    }

    public function update(StoreCategoryRequest $request, $id)
    {
        $category = Category::whereId((int)$id)->first();

        $category->update($request->validated());

        if($request->images)
            $category->images()->sync(array_column($request->images, 'id'));

        return response(['message' => 'Категория "' . $request->name . '" обновлена']);
    }

    public function delete(DeleteCategoryRequest $request)
    {
        $category = Category::create($request->validated());

        return response(['message' => 'Категория "' . $category->name . '" сохранена']);
    }
}
