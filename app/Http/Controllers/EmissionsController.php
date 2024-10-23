<?php

namespace App\Http\Controllers;

use App\Services\EmissionService;
use Illuminate\Http\Request;

class EmissionsController extends Controller
{
    protected $emissionService;

    public function __construct(EmissionService $emissionService)
    {
        $this->emissionService = $emissionService;
    }

    public function index()
    {
        $emissions = $this->emissionService->getAllEmissions();
        return response()->json($emissions);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'date' => 'required|date',
            'sector_id' => 'required|exists:sectors,id',
            'emission_value' => 'required|numeric',
        ]);

        $emission = $this->emissionService->createEmission($data);

        return response()->json($emission, 201);
    }

    public function show($id)
    {
        $emission = $this->emissionService->getEmission($id);
        return response()->json($emission);
    }

    public function update(Request $request, $id)
    {
        $data = $request->validate([
            'date' => 'sometimes|date',
            'sector_id' => 'sometimes|exists:sectors,id',
            'emission_value' => 'sometimes|numeric',
        ]);

        $emission = $this->emissionService->updateEmission($id, $data);

        return response()->json($emission);
    }

    public function destroy($id)
    {
        $this->emissionService->deleteEmission($id);
        return response()->json(null, 204);
    }

    public function getEmissionsData()
    {
        $data = [
            'daily' => $this->emissionService->getDailyEmissions(),
            'monthly' => $this->emissionService->getMonthlyEmissions(),
            'average' => $this->emissionService->getAverageEmissions(),
            'co2_levels' => $this->emissionService->getCO2Levels(),
            'emissions_over_time' => $this->emissionService->getEmissionsOverTime(),
            'emissions_by_sector' => $this->emissionService->getEmissionsBySector(),
            'emissions_by_sector_and_month' => $this->emissionService->getEmissionsBySectorAndMonth(),
        ];

        return response()->json($data);
    }
}
