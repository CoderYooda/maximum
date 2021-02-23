<?php

namespace App\Http\Controllers\Api\System;

use App\Http\Controllers\Controller;
use App\Http\Requests\System\ImageUploadRequest;
use App\Models\System\Image;
use Illuminate\Http\Request;
use Auth;
use Illuminate\Http\UploadedFile;

class ImageController extends Controller
{
    public function __construct()
    {
        ini_set('memory_limit', '-1');
        ini_set('upload_max_filesize', '100M');
        ini_set('post_max_size', '200M');
        ini_set('max_file_uploads', '500');
    }

    public function storeTemp(ImageUploadRequest $request)
    {
        $image = new Image($request->file,"temp/", null);

        return response(['url' => $image->getImageUrl(), 'message' => 'Изображение сохранено']);
    }

    public function storeImage(Request $request)
    {
//        $file_obj = new UploadedFile(public_path($request->image), "image.jpg");

//        $cropdata = $request->crop;
        $image = new Image();
        $image->init($request->image,Auth::user()->id . "/", null, null);

        $image->save();

        return response(['url' => $image->getImageUrl(), 'image' => $image, 'message' => 'Изображение сохранено']);
    }
}
