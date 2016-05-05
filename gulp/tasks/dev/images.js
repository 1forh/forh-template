/**
 * Moves the src/images directory to the build directory
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Images} The images task
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('images', function(){
    return gulp.src(config.paths.src + 'assets/images/**/*')
      .pipe(gulp.dest(config.paths.build + 'assets/images'));
  });
};
