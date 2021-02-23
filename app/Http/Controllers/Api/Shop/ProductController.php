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
        return response(Product::with('images')->get());
    }

    public function get($id)
    {
        $product = Product::with('images')->whereId($id)->first();
        return $product ?  response(['product' => $product]) : response(['message' => 'Товар не найден'], 404);
    }

    public function store(StoreProductRequest $request)
    {
        $product = Product::create($request->validated());

        if($request->images)
        $product->images()->sync(array_column($request->images, 'id'));

        return response(['product' => $product, 'message' => 'Товар "' . $product->name . '" сохранен']);
    }

    public function update(StoreProductRequest $request, $id)
    {
        $product = Product::whereId((int)$id)->first();

        $product->update($request->validated());

        if($request->images)
        $product->images()->sync(array_column($request->images, 'id'));

        return response(['message' => 'Товар "' . $request->name . '" обновлен']);
    }

    public function delete(Request $request)
    {
        $product = Product::create($request->validated());

        return response(['message' => 'Товар "' . $product->name . '" сохранен']);
    }
}
