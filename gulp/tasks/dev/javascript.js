'use strict';

var concat = require('gulp-concat');
var babel = require('gulp-babel');

module.exports = function(gulp, config) {
  
  // Combine JS in 'config.scripts.paths' into one file
  gulp.task('javascript', function() {

    return gulp.src(config.scripts.paths)
      .pipe(babel({
        presets: [ 'es2015' ]
      }))
      .pipe(concat('main.js'))
      .pipe(gulp.dest(config.paths.build + 'assets/scripts')) ;
  });
};