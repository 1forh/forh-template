var critical = require('critical').stream;

/**
 * Inlines the critical styles in the document head
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Critical} The critical task
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('critical', function () {
    return gulp.src(config.paths.dist + '*.html')
      .pipe(critical({
        minify: config.styles.critical.minify,
        base: config.paths.dist,
        inline: config.styles.critical.inline,
        width: config.styles.critical.width,
        height: config.styles.critical.height
      }))
      .pipe(gulp.dest(config.paths.dist));
  });
};
