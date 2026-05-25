/* ============================================================
   ALINE PONS — JavaScript principal
   ============================================================ */

(function () {
  'use strict';

  // ---------- Navigation : changement au scroll ----------
  const nav = document.querySelector('.nav');
  const SCROLL_THRESHOLD = 60;

  function updateNav() {
    if (!nav) return;
    if (window.scrollY > SCROLL_THRESHOLD) {
      nav.classList.add('is-scrolled');
    } else {
      nav.classList.remove('is-scrolled');
    }
  }

  window.addEventListener('scroll', updateNav, { passive: true });
  updateNav();

  // ---------- Menu mobile (toggle) ----------
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');

  if (toggle && links) {
    toggle.addEventListener('click', function () {
      toggle.classList.toggle('is-open');
      links.classList.toggle('is-open');
      document.body.style.overflow = links.classList.contains('is-open') ? 'hidden' : '';
    });

    // Ferme le menu mobile quand on clique sur un lien
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () {
        toggle.classList.remove('is-open');
        links.classList.remove('is-open');
        document.body.style.overflow = '';
      });
    });
  }

  // ---------- Reveal au scroll ----------
  const reveals = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px -8% 0px'
    });

    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    // Fallback : tout afficher
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---------- Année dans le footer ----------
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

})();
