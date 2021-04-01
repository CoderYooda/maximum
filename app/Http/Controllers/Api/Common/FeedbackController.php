<?php

namespace App\Http\Controllers\Api\Common;

use App\Http\Controllers\Controller;
use App\Models\Common\Feedback;
use Illuminate\Http\Request;

class FeedbackController extends Controller
{
    public function all()
    {
        return response(Feedback::with('images')->get());
    }

    public function get($id)
    {
        $feedback = Feedback::with('images')->whereId($id)->first();

        return $feedback ?  response(['feedback' => $feedback]) : response(['message' => 'Отзыв не найден'], 404);
    }

    public function store(Request $request)
    {
        $feedback = Feedback::create($request->only(['name', 'isPublished', 'email', 'comment', 'city']));
        $feedback->image_id = $request->images ? $request->images[0]['id'] : 1;
        $feedback->save();

        return response(['feedback' => $feedback, 'message' => 'Отзыв от "' . $feedback->name . '" сохранен']);
    }

    public function update(Request $request, $id)
    {
        $feedback = Feedback::whereId((int)$id)->first();

        $feedback->update($request->only(['name', 'isPublished', 'email', 'comment', 'city']));

        $feedback->image_id = $request->images[0]['id'];
        $feedback->save();

        return response(['message' => 'Отзыв от "' . $request->name . '" обновлен']);
    }

    public function delete(Request $request)
    {
        $feedback = Feedback::create($request->validated());

        return response(['message' => 'Отзыв "' . $feedback->id . '" удалён']);
    }
}
