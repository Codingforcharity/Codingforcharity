var paths = {
    sass: ["./scss/**/*.scss"]
};

var gulp = require("gulp"),
    newer = require('gulp-newer'),
    nodemon = require("gulp-nodemon"),
    notify = require('gulp-notify'),
    gutil = require('gulp-util'),
    imageminPngquant = require('imagemin-pngquant'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imagemin_zopfli = require('imagemin-zopfli'),
    imagemin_gifsicle = require('imagemin-gifsicle'),
    imagemin_svgo = require('imagemin-svgo'),
    imageminZopfli = require('imagemin-zopfli'),
    imageminWebp = require('imagemin-webp'),
    browserSync = require("browser-sync").create(),
    Cache = require("gulp-file-cache"),
    plumber = require('gulp-plumber'),
    del = require("del"),
    sass = require("gulp-sass"),
    cleanCss = require("gulp-clean-css"),
    rename = require("gulp-rename"),
    sourcemaps = require("gulp-sourcemaps"),
    // uglify = require('gulp-uglify'),
    concat = require("gulp-concat"),
    print = require("gulp-print"),
    babel = require("gulp-babel"),
    imagemin = require('gulp-imagemin');
//babel-preset-es2015

var CacheBuster = require("gulp-cachebust");
var cachebust = new CacheBuster();

gulp.task("sass", function(done) {
    return gulp
        .src("./scss/style.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest("./bundle"))
        .pipe(
            cleanCss({
                keepSpecialComments: 0
            })
        )
        .pipe(rename({ extname: ".min.css" }))
        .pipe(gulp.dest("./bundle"));
});

gulp.task("build-js", function() {
    return (gulp
        .src("./public/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({ presets: ["es2015"] }))
        .pipe(concat("bundle.js"))
        //   .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./bundle")));
});

gulp.task("html", function() {
    return gulp.src("./public/**/*.html").pipe(gulp.dest("./bundle"));
});

gulp.task("build", ["sass", "build-js", "html"], function() {
    return gulp.src("index.html").pipe(cachebust.references());
});

gulp.task("watch", function() {
    return gulp.watch(
        [
            "./public/index.html",
            "./public/views/**/*.html",
            "./scss/style.scss",
            "./public/**/*.js"
        ], ["build"]
    );
});

gulp.task("default", ["build", "watch"]);

//////////////////////
// Andy's additions //
//////////////////////

// var cache = new Cache();
var error = new gutil.PluginError('test', 'something broke', {showStack: true});

gulp.task("compile", function() {
    var stream = gulp
        .src("./public/**/*.js") // your ES2015 code
        .pipe(cache.filter()) // remember files
        .pipe(babel({ presets: ["es2015"] })) // compile new ones
        .pipe(cache.cache()) // cache them
        .pipe(gulp.dest("./bundle")); // write them
    return stream; // important for gulp-nodemon to wait for completion
});

gulp.task("serve", ["optimize-image", "build-js2", "sass2", "html2", "videos", "fonts"], function() {
    var stream = nodemon({
            script: "./index.js", // run ES5 code
            watch: ["/index.js", "/controllers"], // watch ES2015 code
            ext: "js",
            tasks: ["build-js2", "sass2", "html2", "build-images"] // compile synchronously onChange
        })
        .on("start", function() {
            browserSync.init({
                proxy: "http://localhost:5001",
                port: 4000,
                online: true
            });
        })
        .on("restart", function() {
            setTimeout(function() {
                reload({ stream: false });
            }, 1000);
        })
        .on("crash", function() {
            console.error("Application has crashed!\n");
            stream.emit("restart", 10); // restart the server in 10 seconds
        });
    gulp.watch(["scss/**/*"], ["sass2"]);
    gulp.watch(["./public/**/*.html"], ["html2"]);
    gulp.watch("./public/**/*.html").on("change", browserSync.reload);
    gulp.watch(["./assets/img/**/*"], ["optimize-image"]);
    return stream;
});

gulp.task("html2", function(cb) {
    var stream = gulp.src("./public/**/*.html")
    .pipe(plumber())
    .pipe(newer('bundle/views'))
    .pipe(gulp.dest("./bundle"));
    return stream;
});

gulp.task("fonts", function(cb) {
    var stream = gulp.src("./assets/fonts/*.woff").pipe(gulp.dest("./bundle/fonts"));
    return stream;
});

gulp.task("videos", function(cb) {
    var stream = gulp.src("./assets/video/*.mp4").pipe(gulp.dest("./bundle/videos"));
    return stream;
});

gulp.task("sass2", function(cb) {
    var stream = gulp
        .src("./scss/style.scss")
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest("./bundle"))
        .on('error', gutil.log)
        //  .pipe(cleanCss({
        //      keepSpecialComments: 0
        //  }))
        //  .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest("./bundle"))
        .pipe(browserSync.stream());
    return stream;
});

gulp.task("build-js2", function(cb) {
    var stream = gulp
        .src("./public/**/*.js")
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({ presets: ["es2015"] }))
        .pipe(concat("bundle.js"))
        //   .pipe(uglify())
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest("./bundle"));
    return stream;
});

gulp.task("build-images", function() {
    var stream = gulp
        .src("./assets/img/**/*.{gif,jpg,png,svg}")
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest("./bundle/img"));
    return stream;
});

gulp.task('optimize-image', function() {
    return gulp.src(['assets/img/**/*.{gif,jpg,png,svg}'])
        .pipe(plumber())
        .pipe(newer('bundle/img'))
        .pipe(imagemin([
            //png
            imageminPngquant({
                speed: 1,
                quality: 98 //lossy settings
            }),
            imageminZopfli({
                more: true
            }),
            // gif
            imagemin.gifsicle({
                interlaced: true,
                optimizationLevel: 3
            }),
            // gif very light lossy, use only one of gifsicle or Giflossy
            // imageminGiflossy({
            //     optimizationLevel: 3,
            //     optimize: 3, //keep-empty: Preserve empty transparent frames
            //     lossy: 2
            // }),
            //svg
            imagemin.svgo({
                plugins: [{
                    removeViewBox: false
                }]
            }),
            //jpg lossless
            imagemin.jpegtran({
                progressive: true
            }),
            //jpg very light lossy, use vs jpegtran
            imageminMozjpeg({
                quality: 60
            })
        ]))
        .pipe(gulp.dest('bundle/img'))
        .pipe(notify({
            'message': 'Successfully optimized images',
            'onLast': true
        }));
});