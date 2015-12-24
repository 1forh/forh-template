var config = require('../config');

var gulp = require('gulp');
var rimraf = require('rimraf');
var sequence = require('run-sequence');

// Delete the "config.paths.build" folder
gulp.task('clean:build', function(error) {
  rimraf(config.paths.build, error);
});

// Delete the "config.paths.dist" folder
gulp.task('clean:dist', function(error) {
  rimraf(config.paths.dist, error);
});

gulp.task('clean', function(done){
  sequence('clean:build', ['clean:dist'], done);
});