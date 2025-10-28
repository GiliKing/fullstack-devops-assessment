<?php

use App\Http\Controllers\AuthenticationController;
use App\Http\Controllers\FormController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function () {

    // Public routes
    Route::post('/register', [AuthenticationController::class, 'register']);
    Route::post('/login', [AuthenticationController::class, 'login']);

    // Protected routes
    Route::middleware('auth:sanctum')->group(function () {
        // logout
        Route::post('/logout', [AuthenticationController::class, 'logout']);

        // users
        Route::get('/users', [UserController::class, 'index']);
        Route::get('/user', [UserController::class, 'show']);
        
        // forms
        Route::get('/forms', [FormController::class, 'index']);
        Route::post('/forms', [FormController::class, 'store']);
        Route::get('/forms/{form}', [FormController::class, 'show']);
        Route::put('/forms/{form}', [FormController::class, 'update']);
        Route::delete('/forms/{form}', [FormController::class, 'destroy']);
    });
});