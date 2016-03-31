'use strict';

var sequence = require('run-sequence');

module.exports = function(gulp, config) {

  // Build the "app_build" folder by running tasks
  gulp.task('build', function(done) {
    sequence('clean', ['fonts', 'extras', 'pages', 'sass', 'javascript', 'images'], done);
  });

  // Build the "app_dist" folder by running tasks
  gulp.task('build:dist', ['clean'], function(done){
    sequence('build', ['dist:sass', 'dist:pages', 'dist:extras', 'dist:fonts', 'dist:javascript', 'dist:images', 'sitemap'], done);
  });
};