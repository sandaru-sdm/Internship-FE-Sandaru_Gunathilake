window.addEventListener("DOMContentLoaded", () => {
  const contentBox = document.querySelector(".content-box");
  contentBox.classList.add("visible");

  const leftLogos = document.querySelectorAll(
    '[class*="logo-left-"][class*="-box"]'
  );
  const rightLogos = document.querySelectorAll(
    '[class*="logo-right-"][class*="-box"]'
  );
  const section2Details = document.querySelector(".section2-details");
  const section2ImageBox1 = document.querySelector(".section2-image-box-1");
  const section2ImageBox2 = document.querySelector(".section2-image-box-2");

  // Animate left logos
  leftLogos.forEach((logo, i) => {
    setTimeout(() => logo.classList.add("visible"), i * 100);
  });

  // Animate right logos
  rightLogos.forEach((logo, i) => {
    setTimeout(() => logo.classList.add("visible"), i * 100);
  });

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Animate section2 content
          section2Details.classList.add("visible");
          section2ImageBox1.classList.add("visible");
          section2ImageBox2.classList.add("visible");

          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.8,
    }
  );

  const section2 = document.querySelector(".section-2");
  observer.observe(section2);
});