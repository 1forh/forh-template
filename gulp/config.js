'use strict';

var url = 'http://www.samplesite.com';

var ftp = {
  address: 'hosting.com',
  user: 'username',
  password: 'password'
};

var src = './src/';
var build = "./build/";
var dist = "./dist/";

module.exports = {
  site: {
    url: url,
    host: ftp.address,
    user: ftp.user,
    password: ftp.password,
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
  fonts: {
    paths: [
      'bower_components/components-font-awesome/fonts/**.*'
    ]
  },
  styles: {
    paths: [
      'bower_components/components-font-awesome/scss',
      'bower_components/foundation-sites/scss'
    ],
    version: [
      'last 2 versions',
      'ie >= 9'
    ],
    critical: {
      minify: true,
      inline: true,
      width: 1200,
      height: 900
    }
  },
  scripts: {
    paths: [
      'bower_components/jquery/dist/jquery.js',
      'bower_components/what-input/what-input.js',
      'bower_components/foundation-sites/dist/foundation.min.js',
      src + 'assets/scripts/climb.js',
      src + 'assets/scripts/mailer.js',
      src + 'assets/scripts/main.js'
    ]
  },
  extras: {
    paths: [
      src + 'favicon.{png,ico,jpg}',
      src + 'robots.txt',
      src + '*html',
      src + '*.xml',
      src + '.htaccess',
      src + '*.php'
    ]
  }
};
