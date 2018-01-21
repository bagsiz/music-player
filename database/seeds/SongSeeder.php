<?php

use Illuminate\Database\Seeder;

class SongSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // This class will be used to create data for songs table
        
        $data[] = ['name' => 'Doğa 1', 'slug' => 'songs/nature/nature-1.wav', 'category_slug' => 'doga-sesleri'];
        $data[] = ['name' => 'Doğa 2', 'slug' => 'songs/nature/nature-2.wav', 'category_slug' => 'doga-sesleri'];
        $data[] = ['name' => 'Doğa 3', 'slug' => 'songs/nature/nature-3.mp3', 'category_slug' => 'doga-sesleri'];

        $data[] = ['name' => 'Kuş 1', 'slug' => 'songs/bird/bird-1.wav', 'category_slug' => 'kus-sesleri'];
        $data[] = ['name' => 'Kuş 2', 'slug' => 'songs/bird/bird-2.wav', 'category_slug' => 'kus-sesleri'];
        $data[] = ['name' => 'Kuş 3', 'slug' => 'songs/bird/bird-3.wav', 'category_slug' => 'kus-sesleri'];

        $data[] = ['name' => 'Piyano 1', 'slug' => 'songs/piano/piano-1.wav', 'category_slug' => 'piyano-sesleri'];
        $data[] = ['name' => 'Piyano 2', 'slug' => 'songs/piano/piano-2.wav', 'category_slug' => 'piyano-sesleri'];

        foreach ($data as $item) {
            \App\Songs::create($item);
        }
    }
}
