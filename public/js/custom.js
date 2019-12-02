$(document).ready(function() { 
    //SLIDER
    var swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        loop: true,
        speed: 1000,
        navigation: {
            nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
        },
        autoplay: {
                delay: 5000,
                disableOnInteraction: false,
            },
        spaceBetween: 20,
        pagination: {
                el: '.swiper-pagination-alone-testimonial',
                clickable: true
            }
        }
        
    );
});