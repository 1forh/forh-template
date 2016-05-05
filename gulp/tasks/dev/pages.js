var panini = require( 'panini' );

/**
 * Uses Panini to create flat files
 * Panini GitHub repository --- https://github.com/zurb/panini
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Pages} The pages task
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('pages', function() {
    gulp.src(config.paths.src + 'static/pages/**/*.{html,hbs,handlebars,php}')
      .pipe(panini ({
          root: config.paths.src + 'static/pages/',
          layouts: config.paths.src + 'static/layouts/',
          partials: config.paths.src + 'static/partials/',
          data: config.paths.src + 'data/',
          helpers: config.paths.src + 'helpers/'
      }))
      .pipe(gulp.dest(config.paths.build) );
  });

  gulp.task('pages:reset', ['pages'], function() {
    panini.refresh();
    console.log('Pages have been reset.');
  });
};
