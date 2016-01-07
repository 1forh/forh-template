var config = require('../../gulp-config');

var gulp = require('gulp');
var sitemap = require('gulp-sitemap');
 
gulp.task('sitemap', function () {
  gulp.src([config.paths.build + '*.html', '!' + config.paths.build + 'google*.html'])
    .pipe(sitemap({
        siteUrl: config.sitemap.siteUrl,
        changefreq: config.sitemap.changeFreq
    }))
    .pipe(gulp.dest(config.paths.dist));
});