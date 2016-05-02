var format = require('util').format;
var config = require( "../../gulp/config.js" );

/**
 * Handlebars block helper that displays meta content for current page using data/config.json
 * @param {string} page - Current page
 * @example
 * {{#title 'index'}}{{/title}}
 * @returns The HTML inside the helper, displaying the title tag for each page.
 */

module.exports = function(page) {

  var title = config.pages[page].title;

  return format( '<title>%s</title>', title );

}
