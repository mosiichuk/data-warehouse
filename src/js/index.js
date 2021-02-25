import Swiper from 'swiper';
import SwiperCore, {Navigation, Pagination} from 'swiper/core';

SwiperCore.use([Navigation, Pagination]);

document.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        navigation: {
            nextEl: '.button-next',
            prevEl: '.button-prev',
            disabledClass: 'disabled-button'
        },
        pagination: {
            el: '.pagination',
            bulletActiveClass: 'navigation-bullet-active',
            bulletClass: 'navigation-bullet',
        },
        on: {
            transitionEnd: (swiper) => {
                swiper.snapGrid = [...swiper.slidesGrid];
            },
            slidePrevTransitionStart: () => {
                const activeIndex = swiper.activeIndex;
                swiper.slides[activeIndex].classList.remove("hidden");
            },
            slideNextTransitionStart: (swiper) => {
                const activeIndex = swiper.activeIndex;
                swiper.slides[activeIndex - 1].classList.add("hidden");
            },
        }
    });
});
