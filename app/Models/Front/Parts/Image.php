<?php

namespace App\Models\Front\Parts;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\System\Image as Img;

class Image extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'module_image';

    public function image(){
        return $this->belongsTo(Img::class);
    }
}
