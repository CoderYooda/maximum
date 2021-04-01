<?php

namespace App\Models\Common;

use App\Models\System\Image;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Client extends Model
{
    use HasFactory;

    protected $table = 'client';
    protected $guarded = [];

    public function images()
    {
        return $this->hasMany(Image::class, 'id', 'image_id');
    }
}
