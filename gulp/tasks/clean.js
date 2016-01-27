'use strict';

var rimraf = require('rimraf');
var sequence = require('run-sequence');

module.exports = function(gulp, config) {

  // Delete the "build" folder
  gulp.task('clean:build', function(error) {
    rimraf(config.paths.build, error);
  });

  // Delete the "dist" folder
  gulp.task('clean:dist', function(error) {
    rimraf(config.paths.dist, error);
  });

  // Delete both "build" and "dist" folders
  gulp.task('clean', function(done){
    sequence('clean:build', ['clean:dist'], done);
  });
};