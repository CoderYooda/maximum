<?php

namespace App\Http\Requests\Store\Product;

use Illuminate\Foundation\Http\FormRequest;

class StoreProductRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:255',
            'category_id' => 'required|integer',
            'price' => 'required|numeric|min:0|between:0.00,999999.99',
            'action_price' => 'required|numeric|min:0|between:0.00,999999.99',
            'content' => 'required',
            'article' => 'required|max:255',
            'isAction' => 'boolean',
            'inStock' => 'boolean',
            'isPublished' => 'boolean',

            'slug' => 'required|unique:product,slug,'.$this->id,
            'title' => 'required',
            'description' => 'required',
        ];
    }

    public function messages()
    {
        return [
            'name.required' => 'Наименование - обязательное поле',
            'name.string' => 'Наименование должно быть строкой',
            'name.max' => 'максимальное кол-во символов - 255',

            'category_id.required' => 'Категория обязательное поле',
            'category_id.integer' => 'Категория обязательное поле',

            'price.required' => 'Цена обязательное поле',
            'price.numeric' => 'Цена должна быть числом',
            'price.min' => 'Минимальная цена - 0',
            'price.between' => 'Вне диапазона',

            'action_price.required' => 'Акционная цена обязательное поле',
            'action_price.numeric' => 'Акционная цена должна быть числом',
            'action_price.min' => 'Минимальная акционная цена - 0',
            'action_price.between' => 'Вне диапазона',

            'description.required' => 'Обязательное поле',

            'article.required' => 'Обязательное поле',
            'article.max' => 'Максиальное кол-во символов - 255',

            'slug.required' => 'Обязательное поле',
            'title.required' => 'Обязательное поле',
            'description.required' => 'Обязательное поле',
        ];
    }
}
