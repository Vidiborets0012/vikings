Fancybox.bind('[data-fancybox="slogan-video"]', {
       
}); 
      
$(function () {

    $('.heroes-slider-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,        
        asNavFor: '.heroes-slider-text'
    });

    $('.heroes-slider-text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.heroes-slider-img'
    });

});