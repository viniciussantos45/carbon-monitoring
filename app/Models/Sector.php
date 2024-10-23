<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Emission;

class Sector extends Model
{
    protected $fillable = ['name'];

    public function emissions()
    {
        return $this->hasMany(Emission::class);
    }
}
