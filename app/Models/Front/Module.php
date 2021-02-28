<?php

namespace App\Models\Front;

use App\Models\Front\Parts\Image;
use App\Models\Front\Parts\Text;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Module extends Model
{
    use HasFactory;

//    public function __construct(array $attributes = [])
//    {
//        $this->load('text', 'images');
//    }

    protected $table = 'modules';

    public function texts(){
        return $this->hasMany(Text::class);
    }
    public function images(){
        return $this->hasMany(Image::class)->with('image');
    }
    public function template(){
        return $this->belongsTo(ModuleTemplate::class, 'module_template_id');
    }
}
