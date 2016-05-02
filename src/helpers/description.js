var format = require('util').format;
var config = require( "../../gulp/config.js" );

/**
 * Handlebars block helper that displays meta description for current page using data/config.json
 * @param {string} page - Current page
 * @example
 * {{#description 'index'}}{{/description}}
 * @returns The HTML inside the helper, displaying the meta description for each page.
 */

module.exports = function(page) {

  var description = config.pages[page].description;

  return format( '<meta name="description" content="%s">', description );

}
