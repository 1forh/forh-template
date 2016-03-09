'use strict';

var panini = require( 'panini' );

module.exports = function(gulp, config) {

  // Use panini to copy page templates into finished HTML
  gulp.task('pages', function() {
    gulp.src(config.paths.src + 'pages/**/*.{html,hbs,handlebars,php}')
      .pipe(panini ({
          root: config.paths.src + 'pages/',
          layouts: config.paths.src + 'layouts/',
          partials: config.paths.src + 'partials/',
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
