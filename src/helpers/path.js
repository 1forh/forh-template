var format = require('util').format;
var config = require( "../../config.js" ).pages;

/**
 * Handlebars block helper that displays the path to the current page using config.js
 * @param {object} page - Handlebars object
 * @example
 * {{#path}}{{page}}{{/path}}
 * @returns the path to the current page
 */

module.exports = function(page) {

  for( var i = 0; i  < config.length; i++) {
    for( var key in config[i] ) {
      if( config[i][key]['name'] == page.fn(this) ) {
        var path = config[i][key]['path'];
      }
    }
  }

  return format( '%s', path );

}
