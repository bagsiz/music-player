[![Quality Score](https://img.shields.io/scrutinizer/quality/g/bagsiz/music-player/master?style=flat-square)](https://scrutinizer-ci.com/g/bagsiz/music-player)

## Intro

This application is developed for playing comforting sound from different categories.

## Installation

After downloading or cloning this application, move in the newly created directory then,

1. Run ```composer install``` for vendor files (who carries that big luggage around?)

2. Run ```docker-compose up -d``` for creating and starting containers in daemon mode and wait for mySQL container go live

3. Run ```php artisan migrate``` for database table creations

4. Run ```php artisan db:seed``` for creating data for tables

5. Open your favorite browser and head to ```http://localhost::8080```

6. Login with credentials, email ```test@user.com``` and password ```secret```
