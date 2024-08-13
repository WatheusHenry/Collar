<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\AnimalController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\SearchEnderecoController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::prefix('auth')->group(function () {
    Route::post('login', [AuthController::class, 'login']);
    Route::post('register', [AuthController::class, 'register']);
    Route::post('logout', [AuthController::class, 'logout']);
    Route::post('refresh', [AuthController::class, 'refresh']);
});

Route::prefix('user')->group(function () {
    Route::get('', [UserController::class, 'index']);
    Route::get('/{id}', [UserController::class, 'show']);
    Route::put('/{id}', [UserController::class, 'update']);
    Route::delete('/{id}', [UserController::class, 'destroy']);
    Route::get('/user-details', [AuthController::class, 'getUserDetails']);

});

Route::prefix('animals')->group(function () {
    Route::post('/', [AnimalController::class, 'store']);
    Route::get('/', [AnimalController::class, 'index']);
    Route::get('/{id}', [AnimalController::class, 'find']);
    // Route::get('/all-animals', [AnimalController::class, 'allAnimalsWithImages']);

});

// Route::prefix('search-endereco')->group(function () {
//     Route::get('/', [SearchEnderecoController::class, 'search']);
// });
Route::post('/search-endereco', [SearchEnderecoController::class, 'search']);

Route::get('/search-endereco', [SearchEnderecoController::class, 'search']);

Route::get('/all-animals', [AnimalController::class, 'allAnimalsWithImages']);

Route::get('owners/{ownerId}/animals', [AnimalController::class, 'animalsByOwner']);
