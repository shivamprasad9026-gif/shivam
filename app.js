// Enhanced interactions for professional theme

// Mobile nav toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if (hamburger && navMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach(link => link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
  }));
}

// Smooth scroll and active link
const NAV_OFFSET = 90;
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const href = a.getAttribute('href');
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const y = target.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
      window.scrollTo({ top: y, behavior: 'smooth' });
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      a.classList.add('active');
    }
  });
});

// Scrollspy
const sections = document.querySelectorAll('section');
const onScroll = () => {
  let current = '';
  sections.forEach(sec => {
    const top = sec.offsetTop - 140;
    if (scrollY >= top) current = sec.id;
  });
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
};
window.addEventListener('scroll', onScroll);

// Reveal animations using IntersectionObserver
const io = new IntersectionObserver((entries)=>{
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      io.unobserve(entry.target);
    }
  });
},{ threshold: 0.1 });

// Ensure reveal base class is present so CSS transition applies
const revealTargets = document.querySelectorAll('.reveal, .timeline-item, .skill-category, .achievement-card, .education-item');
revealTargets.forEach(el => el.classList.add('reveal'));
revealTargets.forEach(el => io.observe(el));

// Counters for stats
function animateCounter(el, target, duration = 1600) {
  const startTime = performance.now();
  const start = 0;
  const step = now => {
    const p = Math.min(1, (now - startTime) / duration);
    const val = Math.floor(start + (target - start) * p);
    el.textContent = el.textContent.includes('+') ? `${val}+` : String(val);
    if (p < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const statsIo = new IntersectionObserver((entries)=>{
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.querySelectorAll('.stat h4').forEach(h4 => {
        const text = h4.textContent.trim();
        const num = parseFloat(text);
        if (!Number.isNaN(num)) animateCounter(h4, num);
      });
      statsIo.unobserve(e.target);
    }
  });
},{ threshold: 0.5 });
const statsSection = document.querySelector('.about-stats');
if (statsSection) statsIo.observe(statsSection);

// Back to top floating button
const fab = document.createElement('button');
fab.className = 'back-to-top-fab';
fab.innerHTML = '<i class="fas fa-arrow-up"></i>';
document.body.appendChild(fab);
window.addEventListener('scroll', ()=>{
  if (window.scrollY > 300) fab.classList.add('show'); else fab.classList.remove('show');
});
fab.addEventListener('click', ()=> window.scrollTo({ top: 0, behavior: 'smooth' }));

// Ensure start at top on load
window.addEventListener('load', ()=> window.scrollTo(0,0));

