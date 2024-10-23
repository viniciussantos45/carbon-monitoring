<?php

namespace App\Http\Controllers;

use App\Services\SensorService;
use Illuminate\Http\Request;

class SensorsController extends Controller
{
    protected $sensorService;

    public function __construct(SensorService $sensorService)
    {
        $this->sensorService = $sensorService;
    }

    public function index()
    {
        $sensors = $this->sensorService->getAllSensors();
        return response()->json($sensors);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'status' => 'required|string',
            'type' => 'required|string',
            'emission_24h' => 'required|numeric',
            'yearly_usage' => 'required|numeric',
            'capacity' => 'required|numeric',
        ]);

        $sensor = $this->sensorService->createSensor($data);

        return response()->json($sensor, 201);
    }

    public function show($id)
    {
        $sensor = $this->sensorService->getSensor($id);
        return response()->json($sensor);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'name' => 'sometimes|string',
            'status' => 'sometimes|string',
            'type' => 'sometimes|string',
            'emission_24h' => 'sometimes|numeric',
            'yearly_usage' => 'sometimes|numeric',
            'capacity' => 'sometimes|numeric',
        ]);

        $sensor = $this->sensorService->updateSensor($id, $data);

        return response()->json($sensor);
    }

    public function destroy($id)
    {
        $this->sensorService->deleteSensor($id);
        return response()->json(null, 204);
    }

    public function getSensorsData()
    {
        $data = [
            'sensor_types' => $this->sensorService->getSensorTypes(),
            'sensors' => $this->sensorService->getAllSensors(),
        ];

        return response()->json($data);
    }

    public function addSensor(Request $request)
    {
        return $this->store($request);
    }
}
