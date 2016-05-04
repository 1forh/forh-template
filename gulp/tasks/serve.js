'use strict';

var browser = require( 'browser-sync' );

module.exports = function(gulp, config) {

  // Build the site, run the server, and watch for file changes
  gulp.task('serve', ['build'], function() {
    browser.init({
      server: config.paths.build,
      port: config.browsersync.port
    });
    gulp.watch([config.paths.src + 'static/pages/**/*.html'], ['pages', browser.reload]);
    gulp.watch( [
        config.paths.src + 'static/{pages,layouts,partials}/**/*.html',
        config.paths.src + 'helpers/*.js',
      ], ['pages:reset', browser.reload]);
    gulp.watch([config.paths.src + 'assets/styles/**/*.scss'], ['sass' ]);
    gulp.watch([config.paths.src + 'assets/scripts/**/*.js'], ['javascript', browser.reload]);
    gulp.watch([config.paths.src + 'assets/images/**/*'], ['images', browser.reload]);
  });

  // Build a production ready site and launch a server to view
  gulp.task('serve:dist', ['build:dist'], function(){
    browser.init({
      server: config.paths.dist,
      port: config.browsersync.port
    });
  });
};
