'use strict';

var url = 'http://www.samplesite.com';

var src = './src/';
var build = "./build/";
var dist = "./dist/";

module.exports = {
  site: {
    url: url,
    host: 'hosting.com',
    user: 'username',
    password: 'password',
    uploadPath: '/public_html'
  },
  paths: {
    src: src,
    build: build,
    dist: dist
  },
  browsersync: {
    port: 4000
  },
  styles: {
    paths: [
      'bower_components/foundation-sites/scss',
    ],
    version: [
      'last 2 versions',
      'ie >= 9'
    ]
  },
  scripts: {
    paths: [
      // 'bower_components/jquery/dist/jquery.js',
      // 'bower_components/what-input/what-input.js',
      // 'bower_components/foundation-sites/js/foundation.core.js',
      // 'bower_components/foundation-sites/js/foundation.util.*.js',
      // 'bower_components/foundation-sites/js/foundation.*.js',
      src + '/assets/scripts/**/*.js',
      src + '/assets/scripts/main.js'
    ]
  },
  extras: {
    'paths' : [
      src + '/favicon.{png,icon,jpg}',
      src + '/robots.txt',
      src + '/*html',
      src + '*.xml',
      build + '*.php',
      src + '/.htaccess'
    ]
  }
};