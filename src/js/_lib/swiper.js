

/**
 * @name initSwiper
 * @description initialize Swiper
 */
const initSwiper = () => {
  const mySwiper = new Swiper('.swiper-container--main', {
    // Optional parameters
    wrapperClass: "swiper-wrapper",
    slideClass: "swiper-slide",
    direction: 'horizontal', // 'horizontal' or 'vertical'
    loop: true,
    watchOverflow: true,
    normalizeSlideIndex: true,
    grabCursor: true,
    freeMode: false,
    effect: 'slide', // "slide", "fade", "cube", "coverflow" or "flip"
    autoplay: {
      delay: 5000,
    },
    speed: 1000,

    slidesPerView: 1,
    spaceBetween: 0,
  });
};
