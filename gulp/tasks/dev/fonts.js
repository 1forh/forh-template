/**
 * Moves the src/fonts directory to the build directory
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Extras} The extras task
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('fonts', function() { 
    return gulp.src(config.fonts.paths) 
      .pipe(gulp.dest(config.paths.build + 'assets/fonts')); 
  });
};
