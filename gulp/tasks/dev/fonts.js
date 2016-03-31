'use strict';

module.exports = function(gulp, config) {

  // Creates font directory with an array of font paths
  gulp.task('fonts', function() { 
    return gulp.src(config.fonts.paths) 
      .pipe(gulp.dest(config.paths.build + 'assets/fonts')); 
  });
};