var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  slidesPerView: 3,
  spaceBetween: 50,
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
