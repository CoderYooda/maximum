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
            'description' => 'required',
            'article' => 'required|max:255',
            'isAction' => 'boolean',
            'inStock' => 'boolean',
        ];
    }
}
