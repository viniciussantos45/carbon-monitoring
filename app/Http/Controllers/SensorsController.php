<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class SensorsController extends Controller
{
    private $sensors = [
        [
            'id' => 1,
            'name' => 'Sensor 1',
            'status' => 'Online',
            'type' => 'Power Plant',
            'emission_24h' => 50,
            'yearly_usage' => 1200,
            'capacity' => 80,
        ],
        [
            'id' => 2,
            'name' => 'Sensor 2',
            'status' => 'Offline',
            'type' => 'Refinery',
            'emission_24h' => 30,
            'yearly_usage' => 900,
            'capacity' => 60,
        ],

    ];

    public function getSensorsData()
    {
        $data = [
            'sensor_types' => [
                ['type' => 'Power Plant', 'quantity' => 5],
                ['type' => 'Refinery', 'quantity' => 3],
            ],
            'sensors' => $this->sensors,
        ];

        return response()->json($data);
    }

    public function addSensor(Request $request)
    {
        $sensor = $request->all();
        $sensor['id'] = count($this->sensors) + 1;
        $this->sensors[] = $sensor;

        return response()->json([
            'message' => 'Sensor added successfully',
            'sensor' => $sensor,
        ], 201);
    }
}
