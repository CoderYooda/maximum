<?php

namespace App\Models\System;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\UploadedFile;
use Illuminate\Support\Str;
use Intervention\Image\Facades\Image as ImageInt;

use Auth;

class Image extends Model
{
    use HasFactory;

    protected $fillable = [
        'mime',
        'size',
        'filename',
        'rank',
        'url',
        'thumb_url',
        'hash',
        'uploader_id',
    ];

    public function init($image_src, $path, $name, $cropdata = null)
    {
        $image = ImageInt::make($image_src);

        $this->uploader_id = Auth::user()->id;

        $base_path = $this->generateBasePath($path);

        $img = $this->formatImage($image);

        $this->setHash(time());

        $this->setName($this->hash);

        $this->setMime($image);

        //$this->setSize($image);

        $extension = $this->setExtension($image);

        $this->setUrl("/storage" . $base_path . $this->filename . '.' . $extension);

        if($cropdata){
            $this->crop($cropdata, $img);
        }

        $img->save(storage_path('app/public' . $base_path) . $this->filename . '.' . $extension);

    }

    public function getImageUrl()
    {
        return $this->url;
    }

    private function formatImage($image)
    {
        $image->resize(1920, null, function ($constraint) {
            $constraint->aspectRatio();
            $constraint->upsize();
        });

        return $image;
    }

    private function generateBasePath($path = null)
    {
        $base_path = '/files/images/';
        $base_path = $path != null ? $base_path . $path : $base_path;

        if (!file_exists(storage_path('/app/public' . $base_path))) {
            mkdir(storage_path('/app/public' . $base_path), 0777, true);
        }

        return $base_path;
    }

    private function setName($name = null)
    {
        $this->filename = "img_" . $name;
    }

    private function setUrl($base_path)
    {
        $this->url = $base_path;
    }

    private function setExtension($image)
    {
        return 'jpg';//$image->getClientOriginalExtension();
    }

    private function setHash($hash)
    {
        $this->hash = $hash;
    }

    private function setMime($image)
    {
        $this->mime = 'image/jpeg';
    }

    private function setSize($image)
    {
        $this->size = $image->getSize();
    }

    public function crop($cropdata, $img)
    {
        $img->crop((int)$cropdata["width"], (int)$cropdata["height"], (int)$cropdata["left"], (int)$cropdata["top"]);
    }
}
