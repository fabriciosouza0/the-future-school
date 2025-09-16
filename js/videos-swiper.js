const swiper1 = new Swiper(".swiper.videos", {
  loop: true, // Ativa o modo de loop infinito
  autoplay: {
    delay: 2500, // Tempo de 2.5 segundos entre os slides
    disableOnInteraction: false, // O autoplay não para após interação do usuário
  },
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
});

const swiper2 = new Swiper(".swiper.highlights", {
  loop: true, // Ativa o modo de loop infinito
  autoplay: {
    delay: 2500, // Tempo de 2.5 segundos entre os slides
    disableOnInteraction: false, // O autoplay não para após interação do usuário
  },
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
  slidesPerView: 1,
});
