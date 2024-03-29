const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js');
mix.sass('resources/css/app.scss', 'public/css').options({ processCssUrls: false });

//template
mix.sass('public/templates/maximum/assets/css/app.scss', 'public/templates/maximum/assets/css/app.css').options({ processCssUrls: false });

mix.copyDirectory('resources/fonts', 'public/fonts');

mix.copyDirectory('resources/images', 'public/images');

module.exports = {
    output: {
        filename: '[name].js',
        path: path.resolve(__dirname, 'js'),
        publicPath: 'js/',
        chunkFilename: '[name].js'
    },
    watch: true
};

if(mix.inProduction() ) {
    mix.minify('public/js/app.js');
    mix.minify('public/css/app.css');
    // mix.minify('public/css/base.css');
    mix.version();
} else {
    mix.webpackConfig({
        devtool:"inline-source-map",
    });
    mix.sourceMaps();
}
