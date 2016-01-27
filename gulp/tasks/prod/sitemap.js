'use strict';

var sitemap = require('gulp-sitemap');

module.exports = function(gulp, config) {
  
  // Creates sitemap based on site url in config.js
  gulp.task('sitemap', function () {
    gulp.src([config.paths.build + '*.html', '!' + config.paths.build + 'google*.html'])
      .pipe(sitemap({
          siteUrl: config.site.url,
          changefreq: 'yearly'
      }))
      .pipe(gulp.dest(config.paths.dist));
  });
};