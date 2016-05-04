'use strict';

var cssnano = require('gulp-cssnano');
var purify = require('gulp-purifycss');
var babel = require('gulp-babel');
var uglify = require('gulp-uglify');
var imagemin = require('gulp-imagemin');

module.exports = function(gulp, config) {

  gulp.task('dist:pages', function(done) {
    return gulp.src(config.paths.build + '*.html')
      .pipe(gulp.dest(config.paths.dist));
  });

  gulp.task('dist:fonts', function() {
    return gulp.src(config.fonts.paths)
      .pipe(gulp.dest(config.paths.dist + 'assets/fonts'));
  });

  gulp.task('dist:extras', function() {
    return gulp.src(config.extras.paths)
      .pipe(gulp.dest(config.paths.dist));
  });

  gulp.task('dist:sass', ['sass'], function(){
    return gulp.src(config.paths.build + 'assets/styles/main.css')
      .pipe(purify([config.paths.build + 'assets/scripts/**/*.js', config.paths.build + '**/*.html']))
      .pipe(cssnano())
      .pipe(gulp.dest(config.paths.dist + 'assets/styles/'));
  });

  gulp.task('dist:javascript', ['javascript'], function(){
    return gulp.src(config.paths.build + 'assets/scripts/*.js')
      .pipe(babel({
        "presets": ["es2015"]
      }))
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
};


