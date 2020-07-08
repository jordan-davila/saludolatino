let mix = require("laravel-mix");
let LiveReloadPlugin = require("webpack-livereload-plugin");

require("laravel-mix-tailwind");

mix.webpackConfig({ plugins: [new LiveReloadPlugin()] });
mix.copyDirectory("node_modules/@fortawesome/fontawesome-pro/webfonts", "public/webfonts"); // Error with FontAwesome
mix.js("resources/js/app.js", "public/js/app.js")
    .sass("resources/sass/app.scss", "public/css/app.css")
    .tailwind("./tailwind.config.js")
    .sourceMaps();

if (mix.inProduction()) {
    mix.version();
}
