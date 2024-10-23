<?php

namespace App\Services;

use App\Models\Sensor;
use Illuminate\Support\Facades\DB;

class SensorService
{
    public function getAllSensors()
    {
        return Sensor::all();
    }

    public function getSensor($id)
    {
        return Sensor::findOrFail($id);
    }

    public function createSensor($data)
    {
        return Sensor::create($data);
    }

    public function updateSensor($id, $data)
    {
        $sensor = Sensor::findOrFail($id);
        $sensor->update($data);
        return $sensor;
    }

    public function deleteSensor($id)
    {
        $sensor = Sensor::findOrFail($id);
        $sensor->delete();
    }

    public function getSensorTypes()
    {
        return Sensor::select('type', DB::raw('count(*) as quantity'))
            ->groupBy('type')
            ->get();
    }
}
