'use strict';

var psi = require('psi');
var sequence = require('run-sequence');

module.exports = function(gulp, config) {

  var site = config.site.url;

  gulp.task('psi:mobile', function () {
    return psi(site, {
      // key: key
      nokey: 'true',
      strategy: 'mobile',
    }).then(function (data) {
      console.log('Mobile:');
      console.log('Speed score: ' + data.ruleGroups.SPEED.score);
      console.log('Usability score: ' + data.ruleGroups.USABILITY.score);
    });
  });

  gulp.task('psi:desktop', function () {
    return psi(site, {
      nokey: 'true',
      strategy: 'desktop',
    }).then(function (data) {
      console.log('Desktop:');
      console.log('Speed score: ' + data.ruleGroups.SPEED.score);
    });
  });

  gulp.task('psi', function(done) {
    sequence('psi:mobile', 'psi:desktop', done);
  });
};