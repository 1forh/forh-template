var config = require('../config');

var gulp = require('gulp');
var sequence = require('run-sequence');
var ftp = require('vinyl-ftp');
var util = require('gulp-util');

// Deploys to a server using ftp
gulp.task( 'deploy-ftp', function() {

  var CONN = ftp.create({
      host: config.deploy.host,
      user: config.deploy.user,
      password: config.deploy.password,
      parallel: 5,
      log: util.log
  });

  return gulp.src (config.deploy.files, {base: config.paths.dist, buffer: false})
      .pipe(CONN.newer( config.deploy.location )) // Only uploads newer files
      .pipe(CONN.dest( config.deploy.location ));
});

// Sends to server after cleaning and building
gulp.task('deploy', function(done) {
  sequence('build:dist', 'deploy-ftp', done);
});