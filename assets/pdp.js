$(document).ready(function () {
    $('.product-main-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        asNavFor: '.product-thumb'
    });

    $('.product-thumb').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical:true,
        asNavFor: '.product-main-image',
        dots: false,
        focusOnSelect: true,
        verticalSwiping:true,
        responsive: [
        {
            breakpoint: 992,
            settings: {
              vertical: false,
            }
        },
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          }
        },
        {
          breakpoint: 580,
          settings: {
            vertical: false,
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 380,
          settings: {
            vertical: false,
            slidesToShow: 2,
          }
        }
        ]
    });
})