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
      $('.product-page__items').addClass('list'),
      $('.icon-list').addClass('active'),
      $('.icon-th-large').removeClass('active')
    });

    $('.icon-th-large').on('click', function(){
      $('.product-page__item').removeClass('list'),
      $('.icon-th-large').addClass('active'),
      $('.icon-list').removeClass('active')
    });

    $('.aside-title').on('click', function(){
     if($('.categories__list').hasClass('active')){
      $('.categories__list').removeClass('active')
     }else{
      $('.categories__list').addClass('active')
     }
    });

    $('.aside-title-second').on('click', function(){
     if($('.categories__list-second').hasClass('active')){
      $('.categories__list-second').removeClass('active')
     }else{
      $('.categories__list-second').addClass('active')
     }
    });

    $('.product-one__tabs .tab').on('click', function(event) {
      var id = $(this).attr('data-id');
        $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

    $('.icon-list').on('click', function(){
      $('.shop__item').addClass('list'),
      $('.icon-list').addClass('active'),
      $('.icon-th-large').removeClass('active')
    });

    $('.icon-th-large').on('click', function(){
      $('.shop__item').removeClass('list'),
      $('.icon-th-large').addClass('active'),
      $('.icon-list').removeClass('active')
    });

    $('.menu__btn').on('click', function(){
      $('.menu__list').slideToggle(),
      $('.menu').toggleClass('active')
    });

    $('.header__btn-menu').on('click', function(){
      $('.header__box').toggleClass('active')
    });

    $('.feed__slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      prevArrow: $('.prev'),
      nextArrow: $('.next'),
      responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          }
        },
        {
          breakpoint: 780,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    });

    $('.feedback__slider').slick({
      slidesToShow: 2,
      slidesToScroll: 1,
      adaptiveHeight: true,
      variableWidth: true,
      prevArrow: $('.feedback-prev'),
      nextArrow: $('.feedback-next'),
      responsive: [
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }]
    }); 
    
    
    var mixer = mixitup('.shop__items');

});