<?php

namespace App\Http\Requests\Auth;

use Illuminate\Foundation\Http\FormRequest;

class LoginRequest extends FormRequest
{
    public function authorize()
    {
        return true;
    }

    public function rules()
    {
        return [
            'email' => 'required|string|email|max:255|exists:users,email',
            'password' => 'required|string|min:6',
        ];
    }

    public function messages()
    {
        return [
            'email.required' => 'Почтовый адрес - обязательное поле',
            'email.exists' => 'Такого почтового адреса не существует',
            'email.string' => 'Поле должно быть строкой',
            'email.email' => 'Неверный формат',
            'email.max' => 'Превышено максимальное кол - во символов',

            'password.required' => 'Пароль - обязательное поле',
            'password.string' => 'Пароль должен быть строкой',
            'password.min' => 'Слишком мало символов',
        ];
    }
}
