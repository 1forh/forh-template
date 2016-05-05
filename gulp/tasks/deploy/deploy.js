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
        parallel: 5,
        reload: true,
        log: gutil.log
      });

      // Will not upload .htaccess file without declaring it in the glob
      var glob = [
        'dist/**',
        'dist/.htaccess'
      ];

      return gulp.src(glob, { base: config.paths.dist, buffer: false })
        .pipe(conn.newer(config.site.uploadPath))
        .pipe(conn.dest(config.site.uploadPath));
  });

  gulp.task('deploy', function(done){
    sequence('ftp', done);
  });
};
