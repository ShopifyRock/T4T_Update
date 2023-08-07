$(document).ready(function () {
    $('.product-main-image').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: false,
        infinite: false,
        dots: false,
        asNavFor: '.product-thumb',
        responsive: [{
            breakpoint: 767,
            settings: {
                dots: true
            }
        }]
    });

    $('.product-thumb').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        vertical:true,
        asNavFor: '.product-main-image',
        dots: false,
        infinite: false,
        focusOnSelect: true,
        verticalSwiping:true,
        responsive: [{
            breakpoint: 767,
            settings: "unslick"
        }]
    });
})
