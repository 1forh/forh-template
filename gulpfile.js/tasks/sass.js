var config = require('../../gulp-config');

var gulp = require('gulp');
var plumber = require('gulp-plumber');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

// Compile Sass into CSS
gulp.task('sass', function() {
  return gulp.src(config.paths.src + 'assets/styles/main.scss')
    .pipe(plumber())
    .pipe(changed(config.paths.build + 'assets/styles/main.css'))
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: config.styles.paths
    }) .on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: config.styles.version
    }))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(config.paths.build + 'assets/styles'));
});