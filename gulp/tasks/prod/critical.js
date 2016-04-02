'use strict';

var critical = require('critical').stream;

module.exports = function(gulp, config) {
  
  // Inlines critical css 
  gulp.task('critical', function () {
    return gulp.src(config.paths.dist + '*.html')
      .pipe(critical({
        minify: config.styles.critical.minify,
        base: config.paths.dist,    
        inline: config.styles.critical.inline,
        width: config.styles.critical.width,
        height: config.styles.critical.height
      }))
      .pipe(gulp.dest(config.paths.dist));
  });
};