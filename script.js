// Smooth Scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({behavior:'smooth'});
  });
});

// Scroll Reveal Animation
const animateElements = document.querySelectorAll('.animate');
window.addEventListener('scroll', () => {
  const triggerBottom = window.innerHeight / 5 * 4;
  animateElements.forEach(el => {
    const elTop = el.getBoundingClientRect().top;
    if(elTop < triggerBottom) {
      el.style.opacity = 1;
      el.style.transform = 'translateY(0)';
    }
  });
});
