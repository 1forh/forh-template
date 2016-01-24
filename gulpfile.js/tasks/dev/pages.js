var config = require('../../../gulp-config');

var gulp = require('gulp');
var panini = require( 'panini' );

// Use panini to copy page templates into finished HTML
gulp.task('pages', function() {
  gulp.src(config.paths.src + 'pages/**/*.{html,hbs,handlebars}')
    .pipe(panini ( {
        root: config.paths.src + 'pages/',
        layouts: config.paths.src + 'layouts/',
        partials: config.paths.src + 'partials/',
        data: config.paths.src + 'data/'
    }))
    .pipe(gulp.dest(config.paths.build) );
});

gulp.task('pages:reset', ['pages'], function() {
  panini.refresh();
  console.log('pages have been reset');
});
