<?php

namespace App\Models\Front\Parts;

use App\Models\System\Image as Img;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Background extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'module_background';

    public function image(){
        return $this->belongsTo(Img::class);
    }
}
