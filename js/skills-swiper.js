const swiper = new Swiper(".swiper.skills", {
  // Default parameters
  loop: true, // Ativa o modo de loop infinito
  autoplay: {
    delay: 2500, // Tempo de 2.5 segundos entre os slides
    disableOnInteraction: false, // O autoplay não para após interação do usuário
  },
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "horizontal",
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 320px
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    // when window width is >= 480px
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});
