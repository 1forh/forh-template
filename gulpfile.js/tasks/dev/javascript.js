var config = require('../../../gulp-config');

var gulp = require('gulp');
var concat = require('gulp-concat');

// Combine JS in 'config.scripts.paths' into one file
gulp.task('javascript', function() {

  return gulp.src(config.scripts.paths)
    .pipe(concat('main.js') )
    .pipe(gulp.dest(config.paths.build + 'assets/scripts') ) ;
});