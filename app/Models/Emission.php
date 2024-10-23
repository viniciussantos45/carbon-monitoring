<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Models\Sector;

class Emission extends Model
{
    protected $table = 'environmental_emissions';

    protected $fillable = ['date', 'sector_id', 'emission_value'];

    public function sector()
    {
        return $this->belongsTo(Sector::class);
    }
}
