<?php

namespace App\Http\Controllers;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class HomeController extends Controller
{
    // In this controller, we will handle unregistered user requests.

    public function signup(Request $request){
        $email = $request->input('email');
        $name = $request->input('name');
        $password = $request->input('password');
        if(!$name) {
            $msg = ['errorMessage' => 'Name field can not be empty!', 'statusCode' => 400];
            return response($msg, 400);
        }
        if(!$email) {
            $msg = ['errorMessage' => 'Email field can not be empty!', 'statusCode' => 400];
            return response($msg, 400);
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $msg = ['errorMessage' => 'Email address is not valid!', 'statusCode' => 400];
                return response($msg, 400);
            }
        }
        if(!$password) {
            $msg = ['errorMessage' => 'Password field can not be empty!', 'statusCode' => 400];
            return response($msg, 400);
        }

        $checkUser = User::where('email', $email)
            ->first();

        if($checkUser) {
            $msg = ['errorMessage' => 'User already exists!', 'statusCode' => 500];
            return response($msg, 500);
        }

        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password),
        ]);
        if(!$user) {
            $msg = ['errorMessage' => 'An error occurred. Please try again.', 'statusCode' => 500];
            return response($msg, 500);
        }

        $http = new Client();
        $response = $http->post('172.20.0.5/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => env('PASSPORT_ID'),
                'client_secret' => env('PASSPORT_SECRET'),
                'username' => $email,
                'password' => $password,
                'scope' => '',
            ],
        ]);
        return json_decode((string) $response->getBody(), true);
    }

    public function login(Request $request){
        $email = $request->input('email');
        $password = $request->input('password');
        if(!$email) {
            $msg = ['errorMessage' => 'Email field can not be empty!', 'statusCode' => 400];
            return response($msg, 400);
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $msg = ['errorMessage' => 'Email address is not valid!', 'statusCode' => 400];
                return response($msg, 400);
            }
        }
        if(!$password) {
            $msg = ['errorMessage' => 'Password field can not be empty!', 'statusCode' => 400];
            return response($msg, 400);
        }

        if (!Auth::attempt(['email' => $email, 'password' => $password])) {
            $msg = ['errorMessage' => 'Invalid credentials. Try again', 'statusCode' => 500];
            return response($msg, 500);
        }

        $http = new Client();
        $response = $http->post('172.20.0.5/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => env('PASSPORT_ID'),
                'client_secret' => env('PASSPORT_SECRET'),
                'username' => $email,
                'password' => $password,
                'scope' => '',
            ],
        ]);
        return json_decode((string) $response->getBody(), true);

    }
}
