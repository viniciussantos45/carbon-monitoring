<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\EmissionsController;
use App\Http\Controllers\SensorsController;

Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/emissions', [EmissionsController::class, 'getEmissionsData']);
Route::get('/sensors', [SensorsController::class, 'getSensorsData']);
Route::post('/sensors', [SensorsController::class, 'addSensor']);
