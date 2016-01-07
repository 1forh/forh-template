var config = require('../../gulp-config');

var gulp = require( 'gulp' );
var sequence = require('run-sequence');

// Build the "app_build" folder by running tasks
gulp.task('build', function(done) {
  sequence('clean', ['extras', 'pages', 'sass', 'javascript', 'images'], done);
});

// Build the "app_dist" folder by running tasks
gulp.task('build:dist', ['clean'], function(done){
  sequence('build', ['dist:pages', 'dist:extras', 'dist:javascript', 'dist:images', 'sitemap'], 'dist:critical-sass', done);
});