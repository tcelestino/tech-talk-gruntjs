'use strict';

window.TechTalkGrunt = (function(window, $) {
  var $el, $carousel;

  var Carousel = function(element) {
    $el = $(element);
    $carousel = $el.find('.carousel');

    var $btn_prev = $el.find('.btn-prev'),
        $btn_next = $el.find('.btn-next');

    var _bindButton = function() {
      $btn_prev.on('click', _controls);
      $btn_next.on('click', _controls);
    }

    var _controls = function(event) {
      var $t = $(this);
      
      if ($t.hasClass('btn-prev')) {
        $carousel.jcarousel('scroll', '-=1');
      } else if ($t.hasClass('btn-next')) {
        $carousel.jcarousel('scroll', '+=1');
      };

      event.preventDefault();
    }

    if (jQuery.jcarousel) {
      $carousel.jcarousel({wrap: 'circular'});
      _bindButton();
    }
  };

  var CarouselAutoScroll = function(args) {
    if(jQuery.jcarousel) {
      $carousel.jcarouselAutoscroll({
            interval: 5000,
            target: '+=1',
            autostart: true
        })
    }
  }

  var BackHistory = function() {
    var $btn = $('.back');

    var _back = function(event) {
      window.history.back();
      event.preventDefault();
    }

    if ($btn.length) {
      $btn.on('click', _back);
    }
  }

  return {
    carousel: Carousel,
    auto_scroll: CarouselAutoScroll,
    back: BackHistory
  }
})(window, jQuery);
(function(){
  TechTalkGrunt.carousel();
  TechTalkGrunt.auto_scroll();
  TechTalkGrunt.back();
})