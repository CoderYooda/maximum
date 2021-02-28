<?php

namespace App\Models\Front;

use App\Models\System\Image;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'front_categories';

    protected $guarded = [];

    public function images()
    {
        return $this->belongsToMany(Image::class, 'image_front_category', 'category_id', 'image_id');
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'category_id');
    }
}
