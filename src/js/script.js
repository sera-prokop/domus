$(document).ready(function(){

//----------Readmore----------

  $('.main-welcome__much, .kitchen-steps__descr').readmore({
  speed: 375,
  collapsedHeight: 90,
  embedCSS: false,
  moreLink: '<a href="#" class="main-welcome__open">Читать далее</a>',
  lessLink: '<a href="#" class="main-welcome__close">Свернуть</a>'
});


//----------Slider owl.carousel.js----------

  $(".owl-carousel").owlCarousel({
    items: 1,
    loop: true,
    nav:true,
    navText: false,
    // autoplay: true,
    autoplayHoverPause: true
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

  var mouseOverOut = $('.main-kitchen__title, .main-kitchen__more, .main-repairs__title, .main-repairs__more, .main-roof__title, .main-roof__more, .main-wardrobe__title, .main-wardrobe__more'),
      mouseOverOutHeader = $('.header-slider__title, .header-slider__more');

  mouseOverOutHeader.on('mouseover', function(){
    var hoverTitleColorTitle = $(this).find('a'),
        hoverTitleColorSvg = $(this).nextAll('[class $= more]').find('.svg'),
        hoverSvgColorTitle = $(this).prevAll('h2').find('a'),
        hoverSvgColorSvg = $(this).find('.svg');


    hoverTitleColorTitle.css({"color": "#ed573e", "transition": "color 0.25s"});

    hoverTitleColorSvg.css({"fill": "#ed573e", "transition": "fill 0.25s"});

    hoverSvgColorTitle.css({"color": "#ed573e", "transition": "color 0.25s"});

    hoverSvgColorSvg.css({"fill": "#ed573e", "transition": "fill 0.25s"});

  });

  mouseOverOutHeader.on('mouseout', function(){
    var hoverTitleColorTitle = $(this).find('a'),
        hoverTitleColorSvg = $(this).nextAll('[class $= more]').find('.svg'),
        hoverSvgColorTitle = $(this).prevAll('h2').find('a'),
        hoverSvgColorSvg = $(this).find('.svg');

      hoverTitleColorTitle.css("color", "#fff");

      hoverTitleColorSvg.css("fill", "#fff");

      hoverSvgColorTitle.css("color", "#fff");

      hoverSvgColorSvg.css("fill", "#fff");


  });

  mouseOverOut.on('mouseover', function(){

    var hoverTitleColorTitle = $(this).find('a'),
        hoverTitleColorSvg = $(this).nextAll('[class $= more]').find('.svg'),
        hoverSvgColorTitle = $(this).prevAll('h2').find('a'),
        hoverSvgColorSvg = $(this).find('.svg');


    hoverTitleColorTitle.css({"color": "#ed573e", "transition": "color 0.25s"});

    hoverTitleColorSvg.css({"fill": "#ed573e", "transition": "fill 0.25s"});

    hoverSvgColorTitle.css({"color": "#ed573e", "transition": "color 0.25s"});

    hoverSvgColorSvg.css({"fill": "#ed573e", "transition": "fill 0.25s"});

  });

  mouseOverOut.on('mouseout', function(){

    var hoverTitleColorTitle = $(this).find('a'),
        hoverTitleColorSvg = $(this).nextAll('[class $= more]').find('.svg'),
        hoverSvgColorTitle = $(this).prevAll('h2').find('a'),
        hoverSvgColorSvg = $(this).find('.svg');

      hoverTitleColorTitle.css("color", "#2e2e2e");

      hoverTitleColorSvg.css("fill", "#2e2e2e");

      hoverSvgColorTitle.css("color", "#2e2e2e");

      hoverSvgColorSvg.css("fill", "#2e2e2e");

  });


});




