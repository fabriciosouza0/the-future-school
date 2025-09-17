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

const swiper5 = new Swiper(".swiper.social-media", {
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
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});
