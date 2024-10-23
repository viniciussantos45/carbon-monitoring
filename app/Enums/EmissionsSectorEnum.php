<?php

namespace App\Enums;

enum EmissionsSectorEnum: string {
    case PowerPlant = 'power_plant';
    case Refinery = 'refinery';
    case Transportation = 'transportation';
    case Agriculture = 'agriculture';
}
