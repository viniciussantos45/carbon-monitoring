<?php

namespace App\Services;

use App\Models\Emission;
use App\Models\Sector;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;

class EmissionService
{
    public function getDailyEmissions()
    {
        $today = Carbon::today();
        return Emission::whereDate('date', $today)->sum('emission_value');
    }

    public function getMonthlyEmissions()
    {
        $month = Carbon::now()->month;
        return Emission::whereMonth('date', $month)->sum('emission_value');
    }

    public function getAverageEmissions()
    {
        return Emission::avg('emission_value');
    }

    public function getCO2Levels()
    {
        // Placeholder logic for CO2 levels
        return [
            'poor' => 30,
            'normal' => 50,
            'good' => 20,
        ];
    }

    public function getEmissionsOverTime()
    {
        $emissions = Emission::select(
            DB::raw('MONTHNAME(date) as month'),
            DB::raw('MONTH(date) as month_number'),
            DB::raw('SUM(emission_value) as total')
        )
        ->groupBy('month_number', 'month')
        ->orderBy('month_number')
        ->get();

        return [
            'labels' => $emissions->pluck('month'),
            'data' => $emissions->pluck('total'),
        ];
    }


    public function getEmissionsBySector()
    {
        $emissions = Emission::select('sector_id', DB::raw('SUM(emission_value) as emissions'))
            ->groupBy('sector_id')
            ->get();

        return $emissions->map(function ($item) {
            return [
                'sector' => $item->sector->name,
                'emissions' => $item->emissions,
            ];
        });
    }

    public function getEmissionsBySectorAndMonth()
    {
        $emissions = Emission::select(
            'sector_id',
            DB::raw('MONTH(date) as month_number'),
            DB::raw('MONTHNAME(date) as month'),
            DB::raw('SUM(emission_value) as emissions')
        )
        ->groupBy('sector_id', 'month_number', 'month')
        ->orderBy('month_number')
        ->get();

        $sectors = $emissions->groupBy('sector_id');

        $result = $sectors->map(function ($items, $sectorId) {
            $sectorName = $items->first()->sector->name;
            $months = $items->pluck('month')->toArray();
            $emissionValues = $items->pluck('emissions')->toArray();

            return [
                'sector' => $sectorName,
                'labels' => $months,
                'data' => $emissionValues,
            ];
        });

        return $result->values();
    }
    // CRUD Methods
    public function getAllEmissions()
    {
        return Emission::all();
    }

    public function getEmission($id)
    {
        return Emission::findOrFail($id);
    }

    public function createEmission($data)
    {
        return Emission::create($data);
    }

    public function updateEmission($id, $data)
    {
        $emission = Emission::findOrFail($id);
        $emission->update($data);
        return $emission;
    }

    public function deleteEmission($id)
    {
        $emission = Emission::findOrFail($id);
        $emission->delete();
    }
}
