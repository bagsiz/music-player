let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css');

mix.styles([
    'node_modules/bootstrap/dist/css/bootstrap.min.css'
], 'public/node_modules/all.css');

mix.js('node_modules/angular/angular.min.js', 'node_modules/angular.min.js')
    .js('node_modules/lodash/lodash.min.js', 'node_modules/lodash.min.js')
    .js('node_modules/angular-route/angular-route.min.js', 'node_modules/angular-route.min.js')
    .js('node_modules/angular-local-storage/dist/angular-local-storage.min.js', 'node_modules/angular-local-storage.min.js')
    .js('node_modules/restangular/dist/restangular.min.js', 'node_modules/restangular.min.js')
    .js('node_modules/jquery/dist/jquery.min.js', 'node_modules/jquery.min.js')
    .js('node_modules/bootstrap/dist/js/bootstrap.min.js', 'node_modules/bootstrap.min.js');