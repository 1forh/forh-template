var sitemap = require('gulp-sitemap');

/**
 * Creates a sitemap based on the html files in the dist directory
 * Task configuration located in config.js
 *
 * @param {Object} Gulp object
 * @param {Object} Configuration options from config.js
 * @return {Sitemap} The sitemap task
 */
module.exports = function(gulp, config) {
  'use strict';

  gulp.task('sitemap', function () {
    gulp.src([config.paths.dist + '**/*.html', '!' + config.paths.dist + 'google*.html'])
      .pipe(sitemap({
          siteUrl: config.site.url,
          changefreq: 'yearly'
      }))
      .pipe(gulp.dest(config.paths.dist));
  });
};
