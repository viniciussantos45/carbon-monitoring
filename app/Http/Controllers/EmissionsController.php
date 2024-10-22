<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        ];

        return response()->json($data);
    }
}
