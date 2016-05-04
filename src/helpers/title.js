var format = require('util').format;
var config = require( "../../config.js" ).pages;

/**
 * Handlebars block helper that displays the itle tag and contents for current page using config.js
 * @param {object} page - Handlebars object
 * @example
 * {{#title}}{{page}}{{/title}}
 * @returns the title of the current page
 */

module.exports = function(page) {

  for( var i = 0; i  < config.length; i++) {
    for( var key in config[i] ) {
      if( config[i][key]['name'] == page.fn(this) ) {
        var title = config[i][key]['title'];
      }
    }
  }

  return format( '%s', title );

}
