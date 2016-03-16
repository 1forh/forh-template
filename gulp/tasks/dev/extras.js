'use strict';

module.exports = function(gulp, config) {

  // Grab random stuff left in app EX: robots.txt, favicon.png
  gulp.task('extras', function() {
    return gulp.src(config.extras.paths, { base: config.paths.src })
      .pipe(gulp.dest(config.paths.build));
  });
};