<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Emission;
use App\Models\Sector;
use Carbon\Carbon;

class EmissionSeeder extends Seeder
{
    public function run()
    {
        $sectors = Sector::all();

        $dates = [
            Carbon::now()->subMonths(4),
            Carbon::now()->subMonths(3),
            Carbon::now()->subMonths(2),
            Carbon::now()->subMonths(1),
            Carbon::now(),
        ];

        $emissionValues = [50, 120, 30, 230, 80, 60, 80];

        foreach ($sectors as $sector) {
            foreach ($dates as $index => $date) {
                Emission::create([
                    'date' => $date->format('Y-m-d'),
                    'sector_id' => $sector->id,
                    'emission_value' => $emissionValues[array_rand($emissionValues)] + mt_rand(-10, 10),
                ]);
            }
        }
    }
}
