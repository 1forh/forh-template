var config = require('../config');

var gulp = require('gulp');

// Copy images from the 'app_source' folder
gulp.task('images', function(){
  return gulp.src(config.paths.src + 'assets/images/**/*')
    .pipe(gulp.dest(config.paths.build + 'assets/images') );
} ) ;