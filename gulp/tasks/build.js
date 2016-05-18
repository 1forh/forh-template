var sequence = require('run-sequence');

/**
 * Runs all tasks
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return The build tasks
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('build', function(done) {
    sequence('clean', ['fonts', 'extras', 'pages', 'styles', 'scripts', 'images'], done);
  });

  gulp.task('build:dist', function(done) {
    sequence('build', ['dist:styles', 'dist:pages', 'dist:extras', 'dist:fonts', 'dist:scripts', 'dist:images'], ['critical', 'sitemap'], done);
  });
};
