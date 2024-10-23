<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Sensor extends Model
{
    protected $fillable = ['name', 'status', 'type', 'emission_24h', 'yearly_usage', 'capacity'];
}
