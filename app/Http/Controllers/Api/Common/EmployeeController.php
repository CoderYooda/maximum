<?php

namespace App\Http\Controllers\Api\Common;

use App\Http\Controllers\Controller;
use App\Models\Common\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    public function all()
    {
        return response(Employee::with('images')->get());
    }

    public function get($id)
    {
        $employee = Employee::with('images', 'parent')->whereId($id)->first();

        return $employee ?  response(['employee' => $employee]) : response(['message' => 'Сотрудник не найден'], 404);
    }

    public function store(Request $request)
    {
        $employee = Employee::create($request->only(['name', 'isPublished', 'post']));
        $employee->image_id = $request->images[0]['id'];
        $employee->save();

        return response(['employee' => $employee, 'message' => 'Сотрудник "' . $employee->name . '" сохранен']);
    }

    public function update(Request $request, $id)
    {
        $employee = Employee::whereId((int)$id)->first();
        $employee->update($request->only(['name', 'isPublished', 'post']));
        $employee->image_id = $request->images[0]['id'];
        $employee->save();

        return response(['message' => 'Сотрудник "' . $request->name . '" обновлен']);
    }

    public function delete(Request $request)
    {
        $employee = Employee::create($request->validated());

        return response(['message' => 'Категория "' . $employee->name . '" сохранена']);
    }
}
