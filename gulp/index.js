'use strict';

module.exports = function(gulp, config){
  config = require('./config');

  // Utility tasks
  require('./tasks/build')(gulp, config);
  require('./tasks/clean')(gulp, config);
  // require('./tasks/serve')(gulp, config);

  // Development tasks
  require('./tasks/dev/extras')(gulp, config);
  require('./tasks/dev/images')(gulp, config);
  require('./tasks/dev/javascript')(gulp, config);
  require('./tasks/dev/pages')(gulp, config);
  require('./tasks/dev/sass')(gulp, config);

  // Production tasks
  require('./tasks/prod/production')(gulp, config);
  require('./tasks/prod/sitemap')(gulp, config);

  // Deployment tasks
  require('./tasks/deploy/deploy')(gulp, config);
  require('./tasks/deploy/psi')(gulp, config);

  return gulp;
};