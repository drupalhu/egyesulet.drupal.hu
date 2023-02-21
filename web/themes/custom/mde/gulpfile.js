const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

const sourcemaps = require('gulp-sourcemaps');
const cssnano = require('cssnano');

sass.compiler = require('sass');

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
   /* .pipe(postcss( cssnano() ))*/
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'))

}

function watch() {
    gulp.watch('./scss/**/*.scss', style);
}


function style_on_node() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    /* .pipe(postcss( cssnano() ))*/
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./css'));
}

function watch_on_node() {
  gulp.watch('./scss/**/*.scss', style_on_node);
}

exports.style  = style;
exports.watch = watch;
exports.watch_on_node = watch_on_node;
exports.default = watch;
