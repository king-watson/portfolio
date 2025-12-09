// INDEX

gsap.from("#hero-img", { 
  duration: 1.5, 
  y: -100, 
  opacity: 0, 
  ease: "power2.out" 
});

gsap.from("#text-col h1", { 
  duration: 1, 
  x: -50, 
  opacity: 0, 
  delay: 0.5, 
  ease: "power2.out" 
});

gsap.from("#text-col p, #text-col .btn", { 
  duration: 1, 
  x: -50, 
  opacity: 0, 
  delay: 0.7, 
  stagger: 0.3, 
  ease: "power2.out" 
});

// Animate featured work as user scrolls from the left
gsap.utils.toArray(".work-box").forEach((box, index) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      toggleActions: "play none none none"
    },
    x: index % 2 === 0 ? -100 : 100, // even boxes come from left, odd from right
    opacity: 0,
    duration: 0.3,
    ease: "power2.out"
  });
});

// Animate portfolio boxes as user scrolls from the left
gsap.utils.toArray(".portfolio-box").forEach((box, index) => {
  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    x: index % 2 === 0 ? -50 : 50, // alternating left/right
    opacity: 0,
    duration: 0.3,
    ease: "power1.out",
    stagger: 0.2
  });
});


// Animate contact CTA
gsap.from(".contact-cta .contact-text", {
  scrollTrigger: {
    trigger: ".contact-cta",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

gsap.from(".contact-cta .contact-action", {
  scrollTrigger: {
    trigger: ".contact-cta",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});

// BURPLE

// Animate hero image and hero content
gsap.from(".seven-hero-img", {
  duration: 1.5,
  y: -100,
  opacity: 0,
  ease: "power2.out"
});

// Animate overview text elements sequentially
gsap.from(".seven-overview-title", {
  duration: 1,
  x: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".seven-overview-subtitle", {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.3,
  stagger: 0.2,
  ease: "power2.out"
});

gsap.from(".seven-overview-desc, .seven-overview-tags", {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.5,
  stagger: 0.2,
  ease: "power2.out"
});

// Animate goal section
gsap.from(".seven-goal-text", {
  scrollTrigger: {
    trigger: ".seven-goal-text",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Animate process section
gsap.from(".seven-process-text", {
  scrollTrigger: {
    trigger: ".seven-process-text",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Animate problem section
gsap.from(".seven-problem-text", {
  scrollTrigger: {
    trigger: ".seven-problem-text",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Animate deep dive images alternating from left/right
gsap.utils.toArray(".seven-deepdive-wrapper").forEach(function(box, index) {
  let fromX = 0;
  if (index === 0 || index === 2) fromX = -100; // even items from left
  else fromX = 100; // odd items from right

  gsap.from(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    x: fromX,
    opacity: 0,
    duration: 0.5,
    ease: "power2.out"
  });
});

// Animate result section
gsap.from(".seven-result-text", {
  scrollTrigger: {
    trigger: ".seven-result-text",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// Animate video section
gsap.from(".seven-video-element", {
  scrollTrigger: {
    trigger: ".seven-video-element",
    start: "top 80%",
    toggleActions: "play none none none"
  },
  y: 50,
  opacity: 0,
  duration: 1,
  ease: "power2.out"
});

// CONTACT

gsap.from("#header-logo", {
  duration: 1,
  y: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from("#hamburger", {
  duration: 1,
  y: -50,
  opacity: 0,
  delay: 0.2,
  ease: "power2.out"
});

gsap.from(".contact-text h2", {
  duration: 1,
  x: -50,
  opacity: 0,
  ease: "power2.out"
});

gsap.from(".contact-text p", {
  duration: 1,
  x: -50,
  opacity: 0,
  delay: 0.2,
  ease: "power2.out"
});

const contactInputs = gsap.utils.toArray(".contact-form input, .contact-form textarea, .contact-form button");

function animateContactForm() {
  contactInputs.forEach(function(input, index) {
    gsap.from(input, {
      scrollTrigger: {
        trigger: input,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 0.5,
      delay: index * 0.1,
      ease: "power2.out"
    });
  });
}

animateContactForm();

const footerSections = gsap.utils.toArray(".footer-about, .footer-links, .footer-social");

function animateFooter() {
  footerSections.forEach(function(section) {
    gsap.from(section, {
      scrollTrigger: {
        trigger: section,
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 50,
      opacity: 0,
      duration: 1,
      ease: "power2.out"
    });
  });
}

animateFooter();

