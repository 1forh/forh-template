var format = require('util').format;
var config = require( "../../gulp/config.js" );

/**
 * Handlebars block helper that displays title tag contents and contents for current page using data/config.json
 * @param {string} page - Current page
 * @example
 * {{#title 'index'}}{{/title}}
 * @returns The HTML inside the helper, displaying the title tag and contents for each page.
 */

module.exports = function(page) {

  var title = config.pages[page].title;

  return format( '<title>%s</title>', title );

}
