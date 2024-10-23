<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateEmissionsTable extends Migration
{
    public function up()
    {
        Schema::create('environmental_emissions', function (Blueprint $table) {
            $table->id();
            $table->date('date');
            $table->unsignedBigInteger('sector_id');
            $table->float('emission_value');
            $table->timestamps();

            $table->foreign('sector_id')->references('id')->on('sectors')->onDelete('cascade');
        });
    }

    public function down()
    {
        Schema::dropIfExists('environmental_emissions');
    }
}
