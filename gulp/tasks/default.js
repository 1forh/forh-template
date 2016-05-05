var sequence = require('run-sequence');

/**
 * Default task
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Default} The default task
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('default', function(done) {
    sequence('serve', done);
  });
};
