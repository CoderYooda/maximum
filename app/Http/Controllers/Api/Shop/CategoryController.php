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
        return response(Category::all());
    }

    public function store(StoreCategoryRequest $request)
    {
        $category = Category::create($request->validated());

        return response(['category' => $category, 'message' => 'Категория "' . $category->name . '" сохранена']);
    }


    public function delete(DeleteCategoryRequest $request)
    {
        $category = Category::create($request->validated());

        return response(['message' => 'Категория "' . $category->name . '" сохранена']);
    }
}
