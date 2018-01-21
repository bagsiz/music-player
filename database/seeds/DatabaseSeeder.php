<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Install passport keys to table
        \Illuminate\Support\Facades\Artisan::call('passport:install');
        
        // This method calls other seed methods for users, categories, songs and favorites
        $this->call(UserSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(SongSeeder::class);
    }
}
