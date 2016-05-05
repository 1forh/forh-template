var plumber = require('gulp-plumber');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

/**
 * Compiles SCSS in src/styles to CSS in build/css
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Styles} The styles task
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('styles', function() {
    return gulp.src(config.paths.src + 'assets/styles/main.scss')
      .pipe(plumber())
      .pipe(changed(config.paths.build))
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
