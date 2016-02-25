 $(document).ready(function() {

  //clear-header height=header-box
  var header_height = $('.header-container').height();
  var clear_height = $('.clear-header-box');
  clear_height.height(header_height);



  //arrow-top
  var top_show = 150;
  var headShadow = 510;
  var delay = 1000;
  $(document).ready(function() {
    $(window).scroll(function() {
      var _scrollTop =  $(this).scrollTop();
      var _arrowTop = $('.arrow-top');
      var _header = $('.header-wrap');
      var _MenuLi = $('.menu li a');
      var _headFix = $('.main-container.header');
      var _buttomLeft = $('.bottom-left');

      if (_scrollTop > top_show){
         _arrowTop.fadeIn();
         _buttomLeft.fadeIn();
       }
      else {
        _arrowTop.fadeOut();
         _buttomLeft.fadeOut();
      }
      if (_scrollTop > headShadow){
         _header.css({'box-shadow':'0px 2px 0px #f78222, 0px 4px 2px #cbcbcb'});
         _MenuLi.css({'padding-bottom':'2px'});
         _headFix.addClass('head-fix');
      }
      else{
        _header.css({'box-shadow':'0px 2px 0px transparent'});
         _MenuLi.css({'padding-bottom':'0px'});
         _headFix.removeClass('head-fix');
      }
    });
    $('.arrow-top').click(function() {
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

  //anchor menu-click scroll
  var headerHeight = $('.header').height();
  $('a[href*=#]').bind("click", function(e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top - headerHeight
    }, 1000);
    e.preventDefault();
    return false;
  });

  //Active tabs
  $('.tabs-contant li').on('click',function(){
    var tabsActive = $(this);
    $('.tabs-contant li').removeClass('active-tabs');
    tabsActive.addClass('active-tabs');
    var activeSlider = tabsActive.attr('tabs');
    $('.slider-container-1').css('display',"none");
    $('.slider-container-1#'+activeSlider+'').css('display',"block");
  })

});

// slider-container-1

$(document).ready(function() {
 
  $("#slider-1").owlCarousel({
    items : 3,
    responsive : false,
    lazyLoad : true,
    navigation : true
  }); 
    $("#slider-2 ").owlCarousel({
 
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
      singleItem:true
 
      // "singleItem:true" is a shortcut for:
      // items : 1, 
      // itemsDesktop : false,
      // itemsDesktopSmall : false,
      // itemsTablet: false,
      // itemsMobile : false
 
  });
 
  $('.owl-prev,.owl-next').html('');

  //linghtbox 
  var _bodyWidth = $('body').width();
  var linghtboxWidth = $('.lightbox-block').width();
  var leftLightbox = (_bodyWidth -linghtboxWidth) / 2;
  $('.lightbox-block').css('left', leftLightbox);
  $('.butt-a').on('click',function(){
    $('.lightbox .lightbox-block').empty();
    var numbLinght = $(this).closest('.slider-block').attr('ware');
    var bbb = $('#'+numbLinght+'').html();

     $('.lightbox .lightbox-block').append(bbb);
    $('.lightbox').css('display', 'block');
  $('.lightbox-exit').on('click',function(){
    $('.lightbox').css('display', 'none');
  })
  })
});
$(window).resize(function(){
  var _bodyWidth = $('body').width();
  var linghtboxWidth = $('.lightbox-block').width();
  var leftLightbox = (_bodyWidth -linghtboxWidth) / 2;
  $('.lightbox-block').css('left', leftLightbox);

})