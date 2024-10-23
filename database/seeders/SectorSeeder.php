<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

use App\Enums\EmissionsSectorEnum;

class SectorSeeder extends Seeder
{
    public function run()
    {
        DB::table('sectors')->insert([
            ['name' => EmissionsSectorEnum::PowerPlant],
            ['name' => EmissionsSectorEnum::Refinery],
            ['name' => EmissionsSectorEnum::Transportation],
            ['name' => EmissionsSectorEnum::Agriculture],
        ]);
    }
}
