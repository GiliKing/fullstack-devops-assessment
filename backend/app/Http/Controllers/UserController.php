<?php

namespace App\Http\Controllers;

use App\Http\Resources\UserResource;
use App\Models\User;
use App\Traits\HttpResponses;
use Illuminate\Support\Facades\Auth;

class UserController extends Controller
{
    use HttpResponses;

    // get User
    public function index()
    {
        return UserResource::collection(User::simplePaginate(20))
            ->additional([
                'success' => true,
                'message' => 'Users Fetched Successfully',
            ]);
    }

    public function show()
    {
        return $this->success(
            UserResource::make(Auth::user()),
            'User Fetched Successfully',
        );
    }
}
