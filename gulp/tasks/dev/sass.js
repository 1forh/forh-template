'use strict';

var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

module.exports = function(gulp, config) {

  // Compile Sass into CSS with autoprefixer and sourcemaps
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
      .pipe(gulp.dest(config.paths.build + 'assets/styles'))
      .pipe(browserSync.stream());
  });
};