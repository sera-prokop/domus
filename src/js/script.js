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

});