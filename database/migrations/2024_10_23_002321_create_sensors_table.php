<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateSensorsTable extends Migration
{
    public function up()
    {
        Schema::create('sensors', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('status');
            $table->string('type');
            $table->float('emission_24h');
            $table->float('yearly_usage');
            $table->float('capacity');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('sensors');
    }
}
