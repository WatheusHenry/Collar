<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;

class AuthController extends Controller
{

    public function __construct()
    {
        $this->middleware('auth:api', ['except' => ['login', 'register']]);
    }

    public function login(Request $request)
    {
        $request->validate([
            'email' => 'required|string|email',
            'password' => 'required|string',
        ]);
        $credentials = $request->only('email', 'password');

        $token = Auth::attempt($credentials);
        if (!$token) {
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }

        $user = Auth::user();
        return response()->json([
            'status' => 'success',
            'user' => $user,
            'authorisation' => [
                'token' => $token,
                'type' => 'bearer',
            ]
        ]);
    }

    public function register(Request $request)
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|string|email|max:255|unique:users',
            'password' => 'required|string|min:6',
            'document' => 'required|string|min:11|unique:users',
            'zip_code' => 'required|string',
            'phone' => 'required|string',
            'user_level' => 'required|string'
        ]);

        try {
            $user = User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => Hash::make($request->password),
                'document' => $request->document,
                'zip_code' => $request->zip_code,
                'phone' => $request->phone,
                'user_level' => $request->user_level,
            ]);

            // Gere um token para o usuário recém-registrado
            $token = Auth::login($user);

            return response()->json([
                'status' => 'success',
                'message' => 'User registered successfully',
                'user' => $user,
                'authorization' => [
                    'token' => $token,
                    'type' => 'bearer',
                ]
            ], 201); // 201 significa "Created"
        } catch (\Exception $e) {
            return response()->json([
                'status' => 'error',
                'message' => 'Failed to register user: ' . $e->getMessage(),
            ], 500); // 500 significa "Internal Server Error"
        }
    }


    public function logout()
    {
        Auth::logout();
        return response()->json([
            'status' => 'success',
            'message' => 'Successfully logged out',
        ]);
    }

    public function refresh()
    {
        return response()->json([
            'status' => 'success',
            'user' => Auth::user(),
            'authorisation' => [
                'token' => Auth::refresh(),
                'type' => 'bearer',
            ]
        ]);
    }

    public function getUserDetails()
    {
        // Obtenha o usuário autenticado
        $user = Auth::user();

        // Verifique se o usuário está autenticado
        if ($user) {
            // Se o usuário estiver autenticado, retorne os detalhes do usuário em uma resposta JSON
            return response()->json([
                'status' => 'success',
                'user' => $user,
            ]);
        } else {
            // Caso o usuário não esteja autenticado, retorne um erro 401 (Não autorizado)
            return response()->json([
                'status' => 'error',
                'message' => 'Unauthorized',
            ], 401);
        }
    }
}
