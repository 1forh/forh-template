var format = require('util').format;
var config = require( "../../config.js" ).pages;

/**
 * Handlebars block helper that displays the meta description for current page using config.js
 * @param {object} page - Handlebars object
 * @example
 * {{#description}}{{page}}{{/description}}
 * @returns the meta description of the current page
 */

module.exports = function(page) {

  for( var i = 0; i  < config.length; i++) {
    for( var key in config[i] ) {
      if( config[i][key]['name'] == page.fn(this) ) {
        var description = config[i][key]['description'];
      }
    }
  }

  return format( '%s', description );

}
