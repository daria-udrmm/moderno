$(function(){

    $(".rate-star").rateYo({
        rating: 5,
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

    var mixer = mixitup('.shop__items');


});