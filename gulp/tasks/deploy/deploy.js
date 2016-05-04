'use strict';

var gutil = require( 'gulp-util' );
var ftp = require( 'vinyl-ftp' );
var sequence = require('run-sequence');

module.exports = function(gulp, config) {

  gulp.task( 'ftp', function () {

      var conn = ftp.create( {
        host: config.site.host,
        user: config.site.user,
        password: config.site.password,
        parallel: 10,
        log: gutil.log
      });

      return gulp.src( 'dist/**', { base: config.paths.dist, buffer: false })
        .pipe( conn.newer( config.site.uploadPath ))
        .pipe( conn.dest( config.site.uploadPath ));
  });

  gulp.task('deploy', function(done){
    sequence('ftp', done);
  });
};
