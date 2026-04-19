document.getElementById('year').textContent = new Date().getFullYear();

const navLinks = document.querySelectorAll('.site-nav a');
const sections = [...navLinks].map((link) => document.querySelector(link.getAttribute('href')));

const setActiveLink = () => {
  const current = sections.find((section) => {
    if (!section) return false;
    const rect = section.getBoundingClientRect();
    return rect.top <= 120 && rect.bottom >= 120;
  });

  navLinks.forEach((link) => {
    const matches = current && link.getAttribute('href') === `#${current.id}`;
    link.style.color = matches ? 'var(--text)' : 'var(--muted)';
  });
};

window.addEventListener('scroll', setActiveLink);
window.addEventListener('load', setActiveLink);
