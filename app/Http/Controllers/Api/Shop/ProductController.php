<?php

namespace App\Http\Controllers\Api\Shop;

use App\Http\Controllers\Controller;
use App\Http\Requests\Store\Product\StoreProductRequest;
use App\Models\Shop\Product;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function all()
    {
        return response(Product::all());
    }

    public function store(StoreProductRequest $request)
    {
        $product = Product::create($request->validated());

        return response(['product' => $product, 'message' => 'Товар "' . $product->name . '" сохранен']);
    }


    public function delete(Request $request)
    {
        $product = Product::create($request->validated());

        return response(['message' => 'Товар "' . $product->name . '" сохранен']);
    }
}
