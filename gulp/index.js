/**
 * Exports all required tasks to gulpfile.js
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Gulp} Gulp
 */
module.exports = function(gulp, config){
  'use strict';

  config = require('../config');

  // Default task
  require('./tasks/default')(gulp, config);

  // Utility tasks
  require('./tasks/build')(gulp, config);
  require('./tasks/clean')(gulp, config);
  require('./tasks/serve')(gulp, config);

  // Development tasks
  require('./tasks/dev/fonts')(gulp, config);
  require('./tasks/dev/extras')(gulp, config);
  require('./tasks/dev/images')(gulp, config);
  require('./tasks/dev/scripts')(gulp, config);
  require('./tasks/dev/pages')(gulp, config);
  require('./tasks/dev/styles')(gulp, config);

  // Production tasks
  require('./tasks/prod/production')(gulp, config);
  require('./tasks/prod/sitemap')(gulp, config);
  require('./tasks/prod/critical')(gulp, config);

  // Deployment tasks
  require('./tasks/deploy/deploy')(gulp, config);

  return gulp;
};
