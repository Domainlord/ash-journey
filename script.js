// LENIS SMOOTH
const lenis = new Lenis({
  duration: 1.2
});

function raf(time) {
  lenis.raf(time);
  ScrollTrigger.update();
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

gsap.ticker.lagSmoothing(0);

// LOADER
window.addEventListener("load", () => {
  gsap.to("#loader", {
    opacity: 0,
    duration: 1,
    onComplete: () => {
      document.getElementById("loader").style.display = "none";
    }
  });
});

// HERO ANIMATION
gsap.timeline()
  .from(".hero h1", { y: 80, opacity: 0, duration: 1.2 })
  .from(".hero p", { y: 40, opacity: 0, duration: 1 }, "-=0.6")
  .from(".hero img", { scale: 0.8, opacity: 0, duration: 1.2 }, "-=0.8");

// SCROLL
gsap.utils.toArray("section").forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 80,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 85%"
    }
  });
});

gsap.to(".hero", {
  backgroundPosition: "50% 60%",
  scrollTrigger: {
    scrub: true
  }
});

// HERO PARALLAX
gsap.to(".hero", {
  backgroundPosition: "50% 60%",
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

document.getElementById("startBtn").addEventListener("click", () => {
  document.querySelector(".journey").scrollIntoView({
    behavior: "smooth"
  });
});

gsap.fromTo(".journey", 
  { opacity: 0, y: 80 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: ".journey",
      start: "top 85%",
      toggleActions: "play none none reverse"
    }
  }
);

gsap.utils.toArray(".timeline-item").forEach((item) => {
  gsap.from(item, {
    opacity: 0,
    y: 80,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: item,
      start: "top 85%"
    }
  });
});

gsap.utils.toArray(".timeline-item img").forEach(img => {
  gsap.to(img, {
    y: -30,
    scrollTrigger: {
      trigger: img,
      scrub: true
    }
  });
});


gsap.to(".hero-left", {
  opacity: 0,
  y: -50,
  ease: "none",
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.to(".scroll-indicator", {
  opacity: 0,
  scrollTrigger: {
    trigger: ".hero",
    start: "top top",
    end: "bottom top",
    scrub: true
  }
});

gsap.utils.toArray(".timeline-item img").forEach(img => {
  gsap.to(img, {
    y: -20,
    duration: 2,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
  });
});

document.querySelectorAll(".poke-card").forEach(card => {
  const inner = card.querySelector(".poke-inner");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 15;
    const rotateY = (x / rect.width - 0.5) * 15;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    inner.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});

document.querySelectorAll(".comp-card").forEach(card => {
  const inner = card.querySelector(".comp-inner");

  card.addEventListener("mousemove", (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -(y / rect.height - 0.5) * 10;
    const rotateY = (x / rect.width - 0.5) * 10;

    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
  });

  card.addEventListener("mouseleave", () => {
    inner.style.transform = "rotateX(0) rotateY(0) scale(1)";
  });
});
