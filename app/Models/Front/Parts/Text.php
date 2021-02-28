<?php

namespace App\Models\Front\Parts;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Text extends Model
{
    use HasFactory;

    public $timestamps = false;

    protected $table = 'module_text';
}
