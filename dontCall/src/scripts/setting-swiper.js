import Swiper from 'swiper/bundle';

const swiper = new Swiper(".slider-r", {
    // Optional parameters
    direction: "horizontal",
    slidesPerView: 3,
    spaceBetween: 20,
    // effect: "coverflow",
    centeredSlides: true,
    autoplay: {
        delay: 3000,
    },
    loop: true,
    // centerSlides: true,

    // Navigation arrows
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: ".button-next",
        prevEl: ".button-prev",
        disabledClass: 'button-disabled',
    },

    breakpoints: {
        // when window width is >= 320px
        320: {
            slidesPerView: 1,
        },
        // when window width is >= 480px
        480: {
            slidesPerView: 1,
        },
    },
});


