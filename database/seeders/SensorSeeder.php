<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\Sensor;

class SensorSeeder extends Seeder
{
    public function run()
    {
        $sensors = [
            [
                'name' => 'Coal Power Plant',
                'status' => 'online',
                'type' => 'Power Plant',
                'emission_24h' => 50,
                'yearly_usage' => 1200,
                'capacity' => 80,
            ],
            [
                'name' => 'Oil Refinery',
                'status' => 'offline',
                'type' => 'Refinery',
                'emission_24h' => 30,
                'yearly_usage' => 900,
                'capacity' => 60,
            ],
            [
                'name' => 'Gas Power Plant',
                'status' => 'online',
                'type' => 'Power Plant',
                'emission_24h' => 40,
                'yearly_usage' => 1000,
                'capacity' => 70,
            ],
            [
                'name' => 'Chemical Refinery',
                'status' => 'offline',
                'type' => 'Refinery',
                'emission_24h' => 20,
                'yearly_usage' => 800,
                'capacity' => 50,
            ],
            [
                'name' => 'Nuclear Power Plant',
                'status' => 'online',
                'type' => 'Power Plant',
                'emission_24h' => 10,
                'yearly_usage' => 500,
                'capacity' => 90,
            ],
            [
                'name' => 'Metal Refinery',
                'status' => 'offline',
                'type' => 'Refinery',
                'emission_24h' => 15,
                'yearly_usage' => 700,
                'capacity' => 40,
            ],
            [
                'name' => 'Hydro Power Plant',
                'status' => 'online',
                'type' => 'Power Plant',
                'emission_24h' => 5,
                'yearly_usage' => 300,
                'capacity' => 95,
            ],
            [
                'name' => 'Food Refinery',
                'status' => 'offline',
                'type' => 'Refinery',
                'emission_24h' => 10,
                'yearly_usage' => 400,
                'capacity' => 30,
            ],
            [
                'name' => 'Wind Power Plant',
                'status' => 'online',
                'type' => 'Power Plant',
                'emission_24h' => 2,
                'yearly_usage' => 100,
                'capacity' => 100,
            ]
        ];

        foreach ($sensors as $sensor) {
            Sensor::create($sensor);
        }
    }
}
