'use strict';

var sequence = require('run-sequence');

module.exports = function(gulp, config) {

  // Build the "app_build" folder by running tasks
  gulp.task('default', function(done) {
    sequence('serve', done);
  });
};
