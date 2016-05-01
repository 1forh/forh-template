var Climb = function() {
  'use strict';

  var climb = $('#climb');

  this.create = function(color) {

    var icon = '<svg viewBox="0 0 256 256"><polyline fill="none" stroke=" ' + color + ' " stroke-width="16" stroke-linejoin="round" stroke-linecap="round" points="16,184 128,72 240,184"></svg>';

    document.getElementById('climb').innerHTML += (icon);

  };

  this.display = function(y) {

    $(window).scroll(function(){
        if ($(window).scrollTop() > y){
          climb.fadeIn();
        } else {
          climb.fadeOut();
        }
    });

  };

  this.position = function(x, y, side) {

    climb.css('position', 'fixed');
    climb.css('bottom', y);
    climb.css(side, x);

  };

  this.style = function(background, side) {

    var left_box = {
      'z-index': '9001',
      'display': 'none',
      'padding': '1em 1em 1em 1.3em',
      'background-color': background,
      'border-top-right-radius': '10px',
      'border-bottom-right-radius': '10px',
      'border': 'none',
      'cursor': 'pointer',
      'outline': 'none'
    };

    var right_box = {
      'z-index': '9001',
      'display': 'none',
      'padding': '0.7em 1em 0.7em 0.7em',
      'background-color': background,
      'border-top-left-radius': '10px',
      'border-bottom-left-radius': '10px',
      'border': 'none',
      'cursor': 'pointer',
      'outline': 'none'
    };

    var icon = {
      'width': '20px',
      'height': '20px'
    };

    if(side == 'left') {
      climb.css(left_box);
    }
    else if(side == 'right') {
      climb.css(right_box);
    }

    $('#climb svg').css(icon);

  };

  this.climb = function(speed) {

    climb.click( function() {
      $("html, body").animate({ scrollTop: 0 }, speed);
    });

  };

};

var climb_init = function(icon_color, background, side, x, y, speed, smooth) {
  var climb = new Climb();

  climb.create(icon_color);
  climb.display(speed);
  climb.position(x, y, side);
  climb.style(background, side);
  climb.climb(smooth);
};
