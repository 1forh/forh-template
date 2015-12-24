var config = require('../config');

var gulp = require('gulp');
var sitemap = require('gulp-sitemap');
 
gulp.task('sitemap', function () {
    gulp.src(config.paths.build + '*.html')
        .pipe(sitemap({
            siteUrl: config.sitemap.siteUrl,
            changefreq: config.sitemap.changefreq
        }))
        .pipe(gulp.dest(config.paths.dist));
});