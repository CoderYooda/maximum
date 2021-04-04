<?php

namespace App\Http\Controllers\Api\Common;

use App\Http\Controllers\Controller;
use App\Models\Common\Price;
use Illuminate\Http\Request;

class PricesController extends Controller
{
    public function all()
    {
        return response(Price::get());
    }

    public function get($id)
    {
        $price = Price::whereId($id)->first();

        return $price ?  response(['price' => $price]) : response(['message' => 'Настройка не найдена'], 404);
    }

    public function update(Request $request)
    {
        Price::truncate();
        foreach($request['prices'] as $set){
            $price = new Price();
            $price->group = isset($set['group']) && $set['group'] !== '' ? trim($set['group']) : 'Без группы';
            $price->subgroup = isset($set['subgroup']) && $set['subgroup'] !== '' ? trim($set['subgroup']) : ' ';
            $price->cat = isset($set['cat']) && $set['cat'] !== '' ? trim($set['cat']) : ' ';
            $price->pics = isset($set['pics']) && $set['pics'] !== '' ? trim($set['pics']) : ' ';
            $price->value = isset($set['value']) && $set['value'] !== '' ? trim($set['value']) : '0 ₽';
            $price->save();
        }

        return response(['message' => 'Настройки обновлены']);
    }

    public function delete(Request $request)
    {
        $category = Price::create($request->only(['name', 'isPublished', 'content', 'description', 'slug', 'title']));

        return response(['message' => 'Категория "' . $category->name . '" сохранена']);
    }
}
