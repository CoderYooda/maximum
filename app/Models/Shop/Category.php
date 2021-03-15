<?php

namespace App\Models\Shop;

use App\Models\System\Image;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $table = 'shop_categories';

    protected $guarded = [];

    public $path = '/catalogue';

    public function images()
    {
        return $this->belongsToMany(Image::class, 'image_shop_category', 'category_id', 'image_id');
    }

    public function parent()
    {
        return $this->belongsTo(Category::class, 'parent_id');
    }

    public function children()
    {
        return $this->hasMany(Category::class,  'parent_id', 'id');
    }

    public function products()
    {
        return $this->hasMany(Product::class,  'category_id', 'id');
    }

    public function getPath()
    {
        $slugs = $this->generateParentSlug([]);
        $slugs = array_reverse($slugs);
        return implode($slugs, '/');
    }

    public function hasChildWithSlug($slug)
    {
        dd($this);
        dd($this->children()->get());
        $count = $this->whereHas('children', function($q) use ($slug){
            $q->where('slug', $slug);
        })->count();
        dd($count);
    }
    public function hasParentWithSlug($slug)
    {
        return $this->whereHas('parent', function($q) use ($slug){
            $q->where('slug', $slug);
        })->count();
    }

    public function generateParentSlug($slugs)
    {
        $slugs[] = $this->slug;
        $parent = $this->parent()->first();
        if($parent !== null){
            return $parent->generateParentSlug($slugs);
        } else {
            return $slugs;
        }
    }
}
