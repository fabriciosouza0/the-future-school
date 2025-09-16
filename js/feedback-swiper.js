const swiper3 = new Swiper(".swiper.feedbacks", {
  loop: true, // Ativa o modo de loop infinito
  autoplay: {
    delay: 2500, // Tempo de 2.5 segundos entre os slides
    disableOnInteraction: false, // O autoplay não para após interação do usuário
  },
  slidesPerView: 1,
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
});
