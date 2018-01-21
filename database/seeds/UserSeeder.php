<?php

use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //This seeder creates data for users table

        \App\User::create([
            'name' => 'Test User',
            'email' => 'test@user.com',
            'password' => bcrypt('secret'),
        ]);
    }
}
