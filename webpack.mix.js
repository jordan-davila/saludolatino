let mix = require("laravel-mix");
let tailwindcss = require("tailwindcss");
let LiveReloadPlugin = require("webpack-livereload-plugin");

mix.webpackConfig({
    plugins: [new LiveReloadPlugin()]
});

mix.js("resources/js/app.js", "public/js")
    .sass("resources/sass/app.scss", "public/css")
    .options({
        processCssUrls: false,
        postCss: [tailwindcss("./tailwind.config.js")]
    })
    .sourceMaps(true, "source-map");
