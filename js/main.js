Fancybox.bind('[data-fancybox="slogan-video"]', {
       
}); 

Fancybox.bind('[data-fancybox="season"]', {
       
}); 
      
$(function () {

    $('.heroes-slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,        
        asNavFor: '.heroes-slider-text',
        prevArrow: '<button class="slick-btn slick-prev"><img src="images/heroes-arrow-left.png" alt="prev" /></button>',
        nextArrow: '<button class="slick-btn slick-next"><img src="images/heroes-arrow-right.png" alt="next" /></button>'
    });

    $('.heroes-slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        asNavFor: '.heroes-slider-img'
    });

});