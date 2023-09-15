var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 3,
      spaceBetween: 50
    }

  },
  centeredSlides: true,
  initialSlide: 0,
  loop: true,
  loopedSlides: 2,
  hideOnClick: true,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    modifier: 1,
    slideShadows: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
