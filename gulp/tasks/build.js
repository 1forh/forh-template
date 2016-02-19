'use strict';

var sequence = require('run-sequence');

module.exports = function(gulp, config) {

  // Build the "app_build" folder by running tasks
  gulp.task('build', function(done) {
    sequence('clean', ['extras', 'pages', 'sass', 'javascript', 'images'], done);
  });

  // Build the "app_dist" folder by running tasks
  gulp.task('build:dist', ['clean'], function(done){
    sequence('build', ['dist:sass', 'dist:pages', 'dist:extras', 'dist:javascript', 'dist:images', 'sitemap'], done);
  });
};