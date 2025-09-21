const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.remove("animate__fadeOut");
        entry.target.classList.add("animate__fadeIn");
      } else {
        entry.target.classList.remove("animate__fadeIn");
        entry.target.classList.add("animate__fadeOut");
      }
    });
  },
  {
    threshold: 0.2,
  }
);

const elementsToAnimate = document.querySelectorAll(".animate__animated");
elementsToAnimate.forEach((element) => {
  observer.observe(element);
});
