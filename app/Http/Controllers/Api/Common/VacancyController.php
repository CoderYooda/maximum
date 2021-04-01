<?php

namespace App\Http\Controllers\Api\Common;

use App\Http\Controllers\Controller;
use App\Models\Common\Vacancy;
use Illuminate\Http\Request;

class VacancyController extends Controller
{
    public function all()
    {
        return response(Vacancy::get());
    }

    public function get($id)
    {
        $vacancy = Vacancy::whereId($id)->first();

        return $vacancy ?  response(['vacancy' => $vacancy]) : response(['message' => 'вакансия не найдена'], 404);
    }

    public function store(Request $request)
    {
        $vacancy = Vacancy::create($request->all());

        return response(['vacancy' => $vacancy, 'message' => 'Вакансия "' . $vacancy->id . '" сохранена']);
    }

    public function update(Request $request, $id)
    {
        $vacancy = Vacancy::whereId((int)$id)->first();

        $vacancy->update($request->all());

        return response(['message' => 'Вакансия "' . $request->id . '" обновлена']);
    }

    public function delete(Request $request)
    {
        $vacancy = Vacancy::create($request->all());

        return response(['message' => 'Вакансия "' . $vacancy->id . '" сохранена']);
    }
}
