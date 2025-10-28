<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class FormStructure extends Model
{
    use HasApiTokens;

    protected $fillable = [
        'form_id',
        'structure'
    ];

    public function form()
    {
        return $this->belongsTo(Form::class);
    }
}
