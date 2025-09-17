const swiper4 = new Swiper(".swiper.statement", {
  loop: true, // Ativa o modo de loop infinito
  autoplay: {
    delay: 2500, // Tempo de 2.5 segundos entre os slides
    disableOnInteraction: false, // O autoplay não para após interação do usuário
  },
  spaceBetween: 0,
  direction: "horizontal",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  breakpoints: {
    // when window width is >= 320px
    1200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    // when window width is >= 480px
    1300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    // when window width is >= 640px
    1400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});
