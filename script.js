document.addEventListener("DOMContentLoaded", () => {
  gsap.to(".hero-content", { 
      duration: 1, 
      y: 0, 
      opacity: 1, 
      ease: "power3.out" 
  });

  document.addEventListener("mousemove", (e) => {
      let x = (e.clientX / window.innerWidth - 0.5) * 20;
      let y = (e.clientY / window.innerHeight - 0.5) * 20;
      gsap.to(".hero-content", { x, y, duration: 0.5 });
  });

  document.querySelector(".hero-button").addEventListener("mouseenter", () => {
      gsap.to(".hero-button", { scale: 1.1, duration: 0.2 });
  });
  document.querySelector(".hero-button").addEventListener("mouseleave", () => {
      gsap.to(".hero-button", { scale: 1, duration: 0.2 });
  });

  document.querySelector(".hero-button").addEventListener("click", () => {
      alert("Button Clicked! Redirecting...");
  });
});