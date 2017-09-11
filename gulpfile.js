var paths = {
    sass: ['./scss/**/*.scss']
};

var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    cleanCss = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sourcemaps = require('gulp-sourcemaps'),
    // uglify = require('gulp-uglify'),
    concat = require('gulp-concat'),
    print = require('gulp-print'),
    babel = require('gulp-babel');
//babel-preset-es2015


var CacheBuster = require('gulp-cachebust');
var cachebust = new CacheBuster();

// gulp.task('clean', function(cb) {
//     del([
//         './bundle'
//     ], cb);
// });

gulp.task('sass', function(done) {
   return gulp.src('./scss/style.scss')
        .pipe(sass())
        .on('error', sass.logError)
        .pipe(gulp.dest('./bundle'))
        .pipe(cleanCss({
            keepSpecialComments: 0
        }))
        .pipe(rename({ extname: '.min.css' }))
        .pipe(gulp.dest('./bundle'))
        // .on('end', done);
});

gulp.task('build-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(print())
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(concat('bundle.js'))
        //   .pipe(uglify())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('./bundle'));
});

gulp.task('html', function() {
    return gulp.src("./public/**/*.html")
            .pipe(gulp.dest('./bundle'))
})


gulp.task('build', ['sass', 'build-js', 'html'], function() {
    return gulp.src('index.html')
        .pipe(cachebust.references())
});

gulp.task('watch', function() {
    return gulp.watch(['./public/index.html', './public/views/**/*.html', './scss/style.scss', './public/**/*.js'], ['build']);
});

gulp.task('default', ['build', 'watch'])