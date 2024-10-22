<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

enum EmissionsSectorEnum: string {
    case power_plant = 'power_plant';
    case refinery = 'refinery';
    case transportation = 'transportation';
    case agriculture = 'agriculture';
}

class EmissionsController extends Controller
{
    public function getEmissionsData()
    {
        $data = [
            'daily' => 150,
            'monthly' => 4000,
            'average' => 200,
            'co2_levels' => [
                'poor' => 30,
                'normal' => 50,
                'good' => 20,
            ],
            'emissions_over_time' => [
                'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                'data' => [100, 150, 200, 250, 200],
            ],
            'power_plant' => [
                'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                'data' => [50, 60, 70, 80, 90],
            ],
            'refinery' => [
                'labels' => ['Jan', 'Feb', 'Mar', 'Apr', 'May'],
                'data' => [30, 40, 50, 60, 70],
            ],
            'emissions_by_sector' => [
                [ 'sector' => EmissionsSectorEnum::power_plant, 'emissions' => 50 ],
                [ 'sector' => EmissionsSectorEnum::refinery, 'emissions' => 30 ],
                [ 'sector' => EmissionsSectorEnum::transportation, 'emissions' => 20 ],
                [ 'sector' => EmissionsSectorEnum::agriculture, 'emissions' => 10 ],
            ],

        ];

        return response()->json($data);
    }
}
