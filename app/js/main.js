$(function(){

    $(".rate-star").rateYo({
        rating: 5,
        starWidth: "12px",
        readOnly: true,
        spacing: "5px"
      });
      
      $(".product__box-star").rateYo({
        rating: 4.5,
        starWidth: "12px",
        readOnly: true,
        spacing: "5px"
      });

    $('.feed__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        prevArrow: $('.prev'),
        nextArrow: $('.next')
    });
    
    $('.feedback__slider').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        adaptiveHeight: true,
        variableWidth: true,
        prevArrow: $('.feedback-prev'),
        nextArrow: $('.feedback-next')
    }); 

    $(".js-range-slider").ionRangeSlider({
      type: "double",
      min: 0,
      skin: "big",
      max: 350,
      from: 30,
      hide_min_max: true,
      to: 300,
      grid: false,
      prefix: "$"
    });

    $('.icon-list').on('click', function(){
      $('.product-page__item').addClass('list'),
      $('.icon-list').addClass('active'),
      $('.icon-th-large').removeClass('active')
    });
    $('.icon-th-large').on('click', function(){
      $('.product-page__item').removeClass('list'),
      $('.icon-th-large').addClass('active'),
      $('.icon-list').removeClass('active')
    });

    var mixer = mixitup('.shop__items');

});