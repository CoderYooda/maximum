<?php

namespace App\Models\Common;

use App\Models\System\Image;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{
    use HasFactory;

    protected $table = 'employee';
    protected $guarded = [];

    public function images()
    {
        return $this->hasMany(Image::class, 'id', 'image_id');
    }
}
