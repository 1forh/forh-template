/**
 * All tasks are located in gulp/tasks
 * Gulp task configuation in config.js
 */
var gulp = require('gulp');

/**
 * Require all tasks in the gulp directory
 *
 * @param {Object} Gulp object
 */
require('./gulp/index')(gulp);
