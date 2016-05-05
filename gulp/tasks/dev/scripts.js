var concat = require('gulp-concat');

/**
 * Concatenates the JavaScript files in the config.scripts.paths array
 * Moves the src/scripts directory to the build directory
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Scripts} The images task
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('scripts', function() {

    return gulp.src(config.scripts.paths)
      .pipe(concat('main.js'))
      .pipe(gulp.dest(config.paths.build + 'assets/scripts')) ;
  });
};
