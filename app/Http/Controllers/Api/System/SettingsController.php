<?php

namespace App\Http\Controllers\Api\System;

use App\Http\Controllers\Controller;
use App\Models\System\Setting;
use Illuminate\Http\Request;

class SettingsController extends Controller
{
    public function all()
    {
        return response(Setting::get());
    }

    public function get($id)
    {
        $setting = Setting::whereId($id)->first();

        return $setting ?  response(['setting' => $setting]) : response(['message' => 'Настройка не найдена'], 404);
    }

    public function update(Request $request)
    {
        foreach($request['settings'] as $set){
            $setting = Setting::whereId($set['id'])->first();
            $setting->value = $set['value'];
            $setting->save();
        }

        return response(['setting' => 'Настройки обновлены']);
    }

    public function delete(Request $request)
    {
        $category = Setting::create($request->only(['name', 'isPublished', 'content', 'description', 'slug', 'title']));

        return response(['message' => 'Категория "' . $category->name . '" сохранена']);
    }
}
