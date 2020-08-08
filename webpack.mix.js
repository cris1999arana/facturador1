const mix = require('laravel-mix');

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

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/style.scss', 'public/css/app.css');

mix.webpackConfig({
    resolve: {
        alias: {
            '@components': path.resolve(__dirname, 'resources/js/components'),
            '@views': path.resolve(__dirname, 'resources/js/views/tenant'),
            '@helpers': path.resolve(__dirname, 'resources/js/helpers'),
            '@mixins': path.resolve(__dirname, 'resources/js/mixins'),

            '@viewsModuleSale': path.resolve(__dirname, 'modules/Sale/Resources/assets/js/views'),

        }
    }
});