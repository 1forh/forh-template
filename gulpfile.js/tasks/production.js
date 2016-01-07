var config = require('../../gulp-config');

var gulp = require('gulp');
var sequence = require('run-sequence');
var browser = require( 'browser-sync' );
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');
var critical = require('critical').stream;

gulp.task('dist:pages', function(done) {
  return gulp.src(config.paths.build + '*.html')
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('dist:extras', function() {
  return gulp.src(config.extras.paths)
    .pipe(gulp.dest(config.paths.dist));
});

gulp.task('dist:sass', ['sass'], function(){
  return gulp.src(config.paths.build + 'assets/styles/main.css')
      
      .pipe(minifyCss())
      .pipe(gulp.dest(config.paths.dist + 'assets/styles/'));
});

// Generate & Inline Critical-path CSS
gulp.task('dist:critical-sass', ['dist:sass'], function () {
    return gulp.src(config.paths.dist + '*.html')
        .pipe(critical({
          base: config.paths.dist, 
          inline: config.styles.critical.inline, 
          width: config.styles.critical.width,
          height: config.styles.critical.height
        }))
        .pipe(gulp.dest(config.paths.dist));
});

gulp.task('dist:javascript', ['javascript'], function(){
  return gulp.src(config.paths.build + 'assets/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest(config.paths.dist + 'assets/scripts/'));
});

gulp.task('dist:images', ['images'], function(){
  return gulp.src(config.paths.build + 'assets/images/**/*')
    .pipe(imagemin({
      progressive: true
    }))
    .pipe(gulp.dest(config.paths.dist + 'assets/images/'));
});



