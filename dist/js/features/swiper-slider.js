import Swiper from "../node_modules/swiper/swiper-bundle.mjs";

const mainSlider = new Swiper(".swiper", {
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
  },
  speed: 800,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
const testimonialsSlider = new Swiper(".swiper-container", {
  loop: true,
  autoplay: {
    delay: 3500,
  },
  speed: 800,
  slidesPerView: 3,
  spaceBetween: 20,
});
