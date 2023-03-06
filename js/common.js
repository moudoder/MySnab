$(document).ready(function () {
  $('.categorie-item').on('click', function() {
  	$(this).toggleClass('active');
  	return false;
  })

  $('.soc-item').on('click', function() {
  	$('.soc-item').removeClass('active');
  	$(this).addClass('active');
  	return false;
  })

  $('.navigation-mobile__burger').on('click', function() {
  	$('.news-categories').fadeIn();
  	return false;
  })
  $('.news-categories__close').on('click', function() {
  	$('.news-categories').fadeOut();
  	return false;
  })

  $('.burger').on('click', function() {
    $('.header').toggleClass('active');
    return false;
  })

  $('.header-lang__item').on('click', function() {
    return false;
  })



  $('.btn-blue, .white-btn, .contacts-hover, .header-soc__item, .contacts__btn').on('click', function() {
    $(this).addClass('active-click');
    let btn = this;
    setTimeout (function() {
  
      $(btn).removeClass('active-click');
    }, 600)
    return false;
  })

  $('.modal-window').css("display", "flex");
  $('.modal-window').hide();

  jQuery(function($){
    $(document).mouseup( function(e){ // событие клика по веб-документу
      let div = $('.modal-inner'); // тут указываем ID элемента
      if ( !div.is(e.target) // если клик был не по нашему блоку
          && div.has(e.target).length === 0 ) { // и не по его дочерним элементам
        $('.modal-window').fadeOut();
      }
    });
  });

  $('.modal-window__close').on('click', function() {
    $('.modal-window').fadeOut();
  })

  $('.header-bottom .parent').on('click', function() {
    return false;
  })

  $('.btn-callback').on('click', function() {
    $('.modal-callback').fadeIn();
    return false;
  })
  $('.btn-program').on('click', function() {
    $('.modal-program').fadeIn();
    return false;
  })
  $('.btn-offer').on('click', function() {
    $('.modal-offer').fadeIn();
    return false;
  })
  $('.btn-support').on('click', function() {
    $('.modal-support').fadeIn();
    return false;
  })
  $('.btn-account').on('click', function() {
    $('.modal-account').fadeIn();
    return false;
  })
  $('.btn-license').on('click', function() {
    $('.modal-license').fadeIn();
    return false;
  })
})