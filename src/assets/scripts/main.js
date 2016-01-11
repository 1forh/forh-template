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

  // Stop scroll on mouse over map
  $('#map_canvas').addClass('scrolloff'); 
  $('#map').on('click', function () {
      $('#map_canvas').removeClass('scrolloff'); 
  });

  $("#map_canvas").mouseleave(function () {
      $('#map_canvas').addClass('scrolloff');
  });



})(jQuery);