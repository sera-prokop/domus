$(document).ready(function(){

//----------Readmore----------

  $('.main-welcome__much').readmore({
  speed: 375,
  collapsedHeight: 90,
  embedCSS: false,
  moreLink: '<a href="#" class="main-welcome__open">Читать далее</a>',
  lessLink: '<a href="#" class="main-welcome__close">Свернуть</a>'
});

//----------Popup----------

  var popupOpen = $('.header-top__phone'),
      popup = $('.call'),
      popupClose = $('.call__cross');

  popupOpen.on('click', function(e) {
    e.preventDefault();
    popup.show();
  });

  popupClose.on('click', function(e) {
    popup.hide();
  });

  $(document).keyup(function(e){
    if (event.keyCode == 27) {
        popup.hide();
    }
  });

//---------- Hover ----------
  var mouseOverOut = $(".header-slider__title, .header-slider__more, .main-kitchen__title, .main-kitchen__more, .main-repairs__title, .main-repairs__more, .main-roof__title, .main-roof__more, .main-wardrobe__title, .main-wardrobe__more")

  mouseOverOut.mouseover(function(){

    $(this).find('a').css({"color": "#ed573e", "transition": "color 0.25s"});

    $(this).nextAll('[class $= more]').find('.svg').css({"fill": "#ed573e", "transition": "fill 0.25s"});

    $(this).prevAll('h2').find('a').css({"color": "#ed573e", "transition": "color 0.25s"});

    $(this).find('.svg').css({"fill": "#ed573e", "transition": "fill 0.25s"});

  });

  mouseOverOut.mouseout(function(){

      $(this).find('a').css("color", "#2e2e2e");

      $(this).nextAll('[class $= more]').find('.svg').css("fill", "#2e2e2e");

      $(this).prevAll('h2').find('a').css("color", "#2e2e2e");

      $(this).find('.svg').css("fill", "#2e2e2e");


  });



});




