'use strict';

module.exports = function(gulp, config) {

  // Copy images from the 'src' folder
  gulp.task('images', function(){
    return gulp.src(config.paths.src + 'assets/images/**/*')
      .pipe(gulp.dest(config.paths.build + 'assets/images'));
  });
};