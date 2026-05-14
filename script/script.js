'use strict';

document.addEventListener("DOMContentLoaded", () => {
  // Smooth scrolling for nav links
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
      const nav = document.getElementById("nav-links");
      if (nav) nav.classList.remove("show");
    });
  });

  // Scroll animations
  const sections = document.querySelectorAll("section:not(#hero)");
  sections.forEach(sec => {
    sec.style.opacity = 0;
    sec.style.transform = "translateY(40px)";
    sec.style.transition = "0.6s ease";
  });

  const reveal = () => {
    sections.forEach(sec => {
      const top = sec.getBoundingClientRect().top;
      if (top < window.innerHeight - 100) {
        sec.style.opacity = 1;
        sec.style.transform = "translateY(0)";
      }
    });
  };

  window.addEventListener("scroll", reveal);
  window.addEventListener("load", reveal);

  // HAMBURGER MENU - THIS IS THE KEY PART
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");

  if (toggle && navLinks) {
    toggle.addEventListener("click", () => {
      navLinks.classList.toggle("show");
      console.log("Toggle clicked!"); // Debug line
    });
  }
});