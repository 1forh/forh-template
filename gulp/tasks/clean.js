'use strict';

var rimraf = require('rimraf');
var sequence = require('run-sequence');

module.exports = function(gulp, config) {

  var clean_folder = function(name, path) {
    gulp.task(name, function(error) {
      rimraf(path, error);
    });
  };

  // Delete the "build" folder
  clean_folder('clean:build', config.paths.build);

  // Delete the "dist" folder
  clean_folder('clean:dist', config.paths.dist);

  // Delete both "build" and "dist" folders
  gulp.task('clean', function(done){
    sequence('clean:build', ['clean:dist'], done);
  });
};