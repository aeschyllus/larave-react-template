<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\StudentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/students', [StudentController::class, 'index']);
Route::post('/students/create', [StudentController::class, 'store']);
Route::get('/students/{id}', [StudentController::class, 'show']);
Route::post('/students/{id}/update', [StudentController::class, 'update']);
Route::post('/students/{id}/delete', [StudentController::class, 'destroy']);

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
