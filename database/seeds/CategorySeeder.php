<?php

use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //This seeder creates data for categories table

        $data[] = ['name' => 'Doğa Sesleri', 'slug' => 'doga-sesleri', 'cover' => 'doga-sesleri.jpg'];
        $data[] = ['name' => 'Piyano Sesleri', 'slug' => 'piyano-sesleri', 'cover' => 'piyano-sesleri.jpg'];
        $data[] = ['name' => 'Kuş Sesleri', 'slug' => 'kus-sesleri', 'cover' => 'kus-sesleri.jpg'];

        foreach ($data as $item) {
            \App\Categories::create($item);
        }
    }
}
