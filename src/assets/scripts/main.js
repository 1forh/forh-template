+'use strict';

$(document).foundation();

(function($){

  // Adds padding-top to #hero based on the height of #site-header
  var heroMargin = function(){
    var hero = $('#hero');
    var header = $('#site-header');
    var height = header.height();

    hero.css('padding-top', height + 50);

  }();

  // Adds margin-top to #first-section based on the height of #hero
  var firstSectionMargin = function(){
    var sec = $('#first-section');
    var hero = $('#hero');
    var height = hero.height();

    sec.css('margin-top', height + 100);
  }();

  // Toggle navigation on mobile
  var nav_toggle = function(){
    var open = $('#nav-open');
    var close = $('#nav-close');
    var menu = $('#site-nav');

    open.on('click', function() {
      menu.show();
      open.hide();
      close.show();
    });
    close.on('click', function() {
      menu.hide();
      open.show();
      close.hide();
    });
  }();

  // Stop scroll on mouse over map
  $('#map_canvas').addClass('scrolloff'); 
  $('#map').on('click', function () {
      $('#map_canvas').removeClass('scrolloff'); 
  });

  $("#map_canvas").mouseleave(function () {
      $('#map_canvas').addClass('scrolloff');
  });



})(jQuery);