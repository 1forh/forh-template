var rimraf = require('rimraf');
var sequence = require('run-sequence');

/**
 * Deletes the build directory and/or the dist directory
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return The clean tasks
 */
module.exports = function(gulp, config) {
  'use strict';

  var clean_folder = function(name, path) {
    gulp.task(name, function(error) {
      rimraf(path, error);
    });
  };

  clean_folder('clean:build', config.paths.build);
  clean_folder('clean:dist', config.paths.dist);

  gulp.task('clean', function(done){
    sequence('clean:build', ['clean:dist'], done);
  });
};
