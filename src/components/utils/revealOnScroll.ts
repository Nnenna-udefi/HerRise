export const revealOnScroll = () => {
  const revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((el) => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    } else {
      el.classList.remove("active");
    }
  });
};

export const setupRevealOnScroll = () => {
  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run on load in case elements are already in view

  return () => window.removeEventListener("scroll", revealOnScroll);
};
