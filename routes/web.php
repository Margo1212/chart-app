<?php

use App\Http\Controllers\ChannelController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [ChannelController::class, 'index']);
Route::get('/create', [ChannelController::class, 'create']);
Route::post('/save', [ChannelController::class, 'store']);


require __DIR__.'/auth.php';
