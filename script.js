const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNav.style.display = mobileNav.style.display === 'flex' ? 'none' : 'flex';
});