var format = require('util').format;
var config = require( "../../config.js" ).pages;

/**
 * Handlebars block helper that displays head information for current page using config.js
 * @param {string} option - Selects which config option to use from config.js
 * @param {object} page - Handlebars object
 * @example
 * {{#head 'title'}}{{page}}{{/head}}
 * @returns the config option selected for current page
 */
module.exports = function(option, page) {

  for( var i = 0; i  < config.length; i++) {
    for( var key in config[i] ) {
      if( config[i][key]['name'] == page.fn(this) ) {
        option = config[i][key][option];
      }
    }
  }

  return format( '%s', option );

}
