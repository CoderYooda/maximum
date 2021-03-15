<?php

namespace App\Http\Requests\Store\Category;

use Illuminate\Foundation\Http\FormRequest;

class StoreCategoryRequest extends FormRequest
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
            'parent_id' => 'required|integer',
            'slug' => 'required|unique:shop_categories,slug,'.$this->id,
            'title' => 'required',
            'description' => 'max:3',
            'content' => 'max:3',
        ];
    }

    public function messages()
    {
        return [
            'slug.unique' => 'Такой URL уже используется',
            'slug.required' => 'Обязательное поле',
            'name.required' => 'Обязательное поле',
            'name.max' => 'Максимальная длинна - 255',
            'parent_id.required' => 'Обязательное поле',
            'title.required' => 'Обязательное поле',
        ];
    }
}
