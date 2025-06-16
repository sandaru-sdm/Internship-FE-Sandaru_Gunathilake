window.addEventListener("DOMContentLoaded", () => {
  const contentBox = document.querySelector(".content-box");
  contentBox.classList.add("visible");

  const leftLogos = document.querySelectorAll('[class*="logo-left-"][class*="-box"]');
  const rightLogos = document.querySelectorAll('[class*="logo-right-"][class*="-box"]');
  const section2Details = document.querySelector(".section2-details");
  const section2ImageBox1 = document.querySelector(".section2-image-box-1");
  const section2ImageBox2 = document.querySelector(".section2-image-box-2");
  const section2 = document.querySelector(".section-2");
  const section3 = document.querySelector(".section-3");
  const section3Box1 = document.querySelector(".section3-box1");
  const section3Box2 = document.querySelector(".section3-box2");

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
          if (entry.target === section2) {
            section2Details?.classList.add("visible");
            section2ImageBox1?.classList.add("visible");
            section2ImageBox2?.classList.add("visible");
            observer.unobserve(section2);
          }

          if (entry.target === section3) {
            section3Box1?.classList.remove("hidden-left");
            section3Box1?.classList.add("animate-left");
            section3Box2?.classList.remove("hidden-right");
            section3Box2?.classList.add("animate-right");
            observer.unobserve(section3);
          }
        }
      });
    },
    {
      threshold: 0.8,
    }
  );

  if (section2) observer.observe(section2);
  if (section3) observer.observe(section3);
});
