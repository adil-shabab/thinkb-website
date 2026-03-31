// Functionality to control the overflow property of the body tag
// when the offcanvas button is clicked, hiding the scrollbar,
// and restoring it when the close button is clicked.

let bodytag = document.querySelector('body');
let closeBtn = document.querySelector('.close-offcanvas');
let offcanvasBtn = document.querySelector('.open-offcanvas');
if (offcanvasBtn) {
  offcanvasBtn.addEventListener('click', () => {
    bodytag.style.overflow = "auto"
    if (bodytag.style.overflow = "auto") {
      bodytag.style.overflow = "hidden"
    }
  })
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      bodytag.style.overflow = "auto"
    })
  }
}



// offcanvas 3 js code -------------------------------------
// set initial states once
gsap.set(".offcanvas-3__area", {
  x: "-100%",
  opacity: 0,
  visibility: "hidden",
  rotateX: 0,
  rotateY: 0,
  clearProps: "transform"
});

gsap.set(".offcanvas-3__menu ul li", {
  x: -30,
  opacity: 0,
  rotateX: 0
});

gsap.set(".offcanvas-3__meta, .offcanvas-3__social", {
  x: -30,
  opacity: 0
});

// offcanvas 3 Show -------------------------------------
function showCanvas3() {
  let canvas3 = gsap.timeline();

  canvas3.to(".offcanvas-3__area", {
    x: 0,
    visibility: "visible",
    duration: 0.6,
    opacity: 1,
    ease: "power3.out"
  });

  canvas3.to(
    ".offcanvas-3__menu ul li",
    {
      opacity: 1,
      x: 0,
      stagger: 0.05,
      duration: 0.5,
      ease: "power3.out"
    },
    "-=0.3"
  );

  canvas3.to(
    ".offcanvas-3__meta",
    {
      opacity: 1,
      x: 0,
      visibility: "visible",
      duration: 0.4,
      ease: "power3.out"
    },
    "-=0.35"
  );

  canvas3.to(
    ".offcanvas-3__social",
    {
      opacity: 1,
      x: 0,
      visibility: "visible",
      duration: 0.4,
      ease: "power3.out"
    },
    "-=0.35"
  );
}

// offcanvas 3 Hide -------------------------------------
function hideCanvas3() {
  let canvas3 = gsap.timeline();

  canvas3.to(".offcanvas-3__menu ul li", {
    opacity: 0,
    x: -30,
    stagger: 0.03,
    duration: 0.25,
    ease: "power2.in"
  });

  canvas3.to(
    ".offcanvas-3__meta",
    {
      opacity: 0,
      x: -30,
      visibility: "hidden",
      duration: 0.25,
      ease: "power2.in"
    },
    "-=0.2"
  );

  canvas3.to(
    ".offcanvas-3__social",
    {
      opacity: 0,
      x: -30,
      visibility: "hidden",
      duration: 0.25,
      ease: "power2.in"
    },
    "-=0.2"
  );

  canvas3.to(
    ".offcanvas-3__area",
    {
      x: "-100%",
      opacity: 0,
      duration: 0.5,
      ease: "power3.in"
    },
    "-=0.1"
  );

  canvas3.set(".offcanvas-3__area", {
    visibility: "hidden"
  });
}