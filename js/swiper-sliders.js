const swiper = new Swiper(".swiper.skills", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  slidesPerView: 1,
  spaceBetween: 0,
  direction: "horizontal",
  breakpoints: {
    576: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 0,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
  },
});

const swiper2 = new Swiper(".swiper.highlights", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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

const swiper1 = new Swiper(".swiper.videos", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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

const swiper4 = new Swiper(".swiper.statement", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
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
    1200: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    1300: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
  },
});

const swiper5 = new Swiper(".swiper.social-media", {
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  spaceBetween: 20,
  direction: "horizontal",
  pagination: {
    el: ".swiper-pagination",
  },
  keyboard: true,
  breakpoints: {
    992: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
