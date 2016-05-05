'use strict';

var url = 'http://www.sampleforhtemplate.com';

var ftp = {
  hostname: 'sampleaddress',
  user: 'username',
  password: 'password'
};

var src = './src/';
var build = "./build/";
var dist = "./dist/";

/**
 * Project-wide configuration
 *
 * @return {Object} config
 */
module.exports = {
  site: {
    url: url,
    host: ftp.hostname,
    user: ftp.user,
    password: ftp.password,
    uploadPath: '/public_html/'
  },
  paths: {
    src: src,
    build: build,
    dist: dist
  },
  pages: [
    {
      index: {
        "name": "index",
        "url": url,
        "title": "Forh Template | Home Page",
        "social-title": "Forh Template",
        "description": "Static website template."
      }
    },
    {
      forhohforh: {
        "name": "404",
        "url": url + "/404.html",
        "title": "Forh Template | 404 Error"
      }
    }
  ],
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
      src + 'humans.txt',
      src + '*html',
      src + '*.xml',
      src + '.htaccess',
      src + '*.php'
    ]
  }
};
