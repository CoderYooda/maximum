<?php

namespace App\Models\Shop;

use App\Models\Models\Pages\Seo;
use App\Models\System\Image;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;

    protected $table = 'product';
    protected $guarded = [];

    public function images()
    {
        return $this->belongsToMany(Image::class, 'image_product', 'product_id', 'image_id');
    }

    public function seo()
    {
        return $this->hasOne(Seo::class,'seo_id');
    }
}
