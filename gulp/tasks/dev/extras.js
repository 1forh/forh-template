/**
 * Moves the leftover, necessary files in the src directory to the build directory
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Extras} The extras task
 */
module.exports = function(gulp, config) {
  'use strict';

  // Grab random stuff left in app EX: robots.txt, favicon.png
  gulp.task('extras', function() {
    return gulp.src(config.extras.paths, { base: config.paths.src })
      .pipe(gulp.dest(config.paths.build));
  });
};
