var browser = require( 'browser-sync' );

/**
 * Start a server at port config.browsersync.port for the build directory or the dist directory
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return The serve tasks
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('serve', ['build'], function() {
    browser.init({
      server: config.paths.build,
      port: config.browsersync.port
    });

    gulp.watch([config.paths.src + 'static/pages/**/*.html'], ['pages', browser.reload]);
    gulp.watch([config.paths.src + 'static/{pages,layouts,partials}/**/*.html'], ['pages:reset', browser.reload]);
    gulp.watch([config.paths.src + 'assets/styles/**/*.scss'], ['styles' ]);
    gulp.watch([config.paths.src + 'assets/scripts/**/*.js'], ['scripts', browser.reload]);
    gulp.watch([config.paths.src + 'assets/images/**/*'], ['images', browser.reload]);
  });

  gulp.task('serve:dist', ['build:dist'], function() {
    browser.init({
      server: config.paths.dist,
      port: config.browsersync.port
    });
  });
};
