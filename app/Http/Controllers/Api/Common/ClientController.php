<?php

namespace App\Http\Controllers\Api\Common;

use App\Http\Controllers\Controller;
use App\Models\Common\Client;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function all()
    {
        return response(Client::with('images')->get());
    }

    public function get($id)
    {
        $category = Client::with('images')->whereId($id)->first();

        return $category ?  response(['category' => $category]) : response(['message' => 'Категория не найдена'], 404);
    }

    public function store(Request $request)
    {
        $category = Client::create($request->only(['name', 'isPublished', 'tag', 'link', 'phone']));

        $category->image_id = $request->images[0]['id'];
        $category->save();

        return response(['category' => $category, 'message' => 'Категория "' . $category->name . '" сохранена']);
    }

    public function update(Request $request, $id)
    {
        $category = Client::whereId((int)$id)->first();

        $category->update($request->only(['name', 'isPublished', 'tag', 'link', 'phone']));
        $category->image_id = $request->images[0]['id'];
        $category->save();

        return response(['message' => 'Категория "' . $request->name . '" обновлена']);
    }

    public function delete(Request $request)
    {
        $category = Client::create($request->only(['name', 'isPublished', 'tag', 'link', 'phone']));

        return response(['message' => 'Категория "' . $category->name . '" сохранена']);
    }
}
