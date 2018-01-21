<?php

namespace App\Http\Controllers;

use App\User;
use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class HomeController extends Controller
{
    // In this controller, we will handle unregistered user requests.

    private $key;
    private $secret;

    public function __construct()
    {
        $apiKey = DB::table('oauth_clients')
            ->where('password_client', 1)->first();

        $this->key = $apiKey->id;
        $this->secret = $apiKey->secret;
    }

    public function signup(Request $request){
        $email = $request->input('email');
        $name = $request->input('name');
        $password = $request->input('password');

        //Check if data is not null
        if(!$name) {
            $msg = ['errorMessage' => 'İsim boş olamaz!', 'errorCode' => 400];
            return response($msg, 400);
        }
        if(!$email) {
            $msg = ['errorMessage' => 'Email boş olamaz!', 'errorCode' => 400];
            return response($msg, 400);
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $msg = ['errorMessage' => 'Email doğru değil!', 'errorCode' => 400];
                return response($msg, 400);
            }
        }
        if(!$password) {
            $msg = ['errorMessage' => 'Şifre boş olamaz!', 'errorCode' => 400];
            return response($msg, 400);
        }

        //Check if user already exists
        $checkUser = User::where('email', $email)
            ->first();

        if($checkUser) {
            $msg = ['errorMessage' => 'Kullanıcı kayıtlı!', 'errorCode' => 500];
            return response($msg, 500);
        }

        //Create user and display error if something goes wrong
        $user = User::create([
            'name' => $name,
            'email' => $email,
            'password' => bcrypt($password),
        ]);
        if(!$user) {
            $msg = ['errorMessage' => 'Bir hata oluştu. Tekrar deneyin.', 'errorCode' => 500];
            return response($msg, 500);
        }

        //Response with token object
        $http = new Client();
        $response = $http->post('172.20.0.5/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => $this->key,
                'client_secret' => $this->secret,
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

        //Check if data is not null
        if(!$email) {
            $msg = ['errorMessage' => 'Email boş olamaz!', 'errorCode' => 400];
            return response($msg, 400);
        } else {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $msg = ['errorMessage' => 'Email doğru değil!', 'errorCode' => 400];
                return response($msg, 400);
            }
        }
        if(!$password) {
            $msg = ['errorMessage' => 'Şifre boş olamaz!', 'errorCode' => 400];
            return response($msg, 400);
        }

        //Check if credentials are correct and display error if not
        if (!Auth::attempt(['email' => $email, 'password' => $password])) {
            $msg = ['errorMessage' => 'Hatalı bilgiler. Tekrar deneyin.', 'errorCode' => 500];
            return response($msg, 500);
        }

        //Response with token object if authenticated
        $http = new Client();
        $response = $http->post('172.20.0.5/oauth/token', [
            'form_params' => [
                'grant_type' => 'password',
                'client_id' => $this->key,
                'client_secret' => $this->secret,
                'username' => $email,
                'password' => $password,
                'scope' => '',
            ],
        ]);
        return json_decode((string) $response->getBody(), true);

    }
}
