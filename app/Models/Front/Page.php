<?php

namespace App\Models\Front;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    protected $table = 'pages';

    public function modules()
    {
        return $this->belongsToMany(Module::class, 'pages_modules', 'page_id', 'module_id');
    }
}
