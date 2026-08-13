// ============================================================================
// Hovara — minimal JS for nav, mobile drawer, scroll reveal, schedule day tabs.
// No frameworks. No dependencies. Reduced-motion aware.
// ============================================================================

(function () {
  'use strict';

  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // ---- Mobile drawer -----------------------------------------------------
  const toggle = document.querySelector('.nav-toggle');
  const drawer = document.getElementById('mobile-drawer');
  const close  = drawer && drawer.querySelector('.drawer-close');

  function setDrawer(open) {
    if (!drawer || !toggle) return;
    drawer.classList.toggle('is-open', open);
    drawer.setAttribute('aria-hidden', open ? 'false' : 'true');
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    document.body.style.overflow = open ? 'hidden' : '';
  }
  if (toggle) toggle.addEventListener('click', () => setDrawer(true));
  if (close)  close.addEventListener('click', () => setDrawer(false));
  if (drawer) {
    drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setDrawer(false)));
    document.addEventListener('keydown', e => { if (e.key === 'Escape') setDrawer(false); });
  }

  // ---- Reveal on scroll --------------------------------------------------
  const reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    if (reduced || !('IntersectionObserver' in window)) {
      reveals.forEach(el => el.classList.add('in'));
    } else {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            obs.unobserve(entry.target);
          }
        });
      }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
      reveals.forEach(el => io.observe(el));
    }
  }

  // ---- Schedule day tabs (cosmetic; switches data-day visibility) -------
  document.querySelectorAll('.schedule-tabs').forEach(tabs => {
    const buttons = tabs.querySelectorAll('.schedule-tab');
    const list = tabs.parentElement.querySelector('.schedule-list');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.setAttribute('aria-selected', 'false'));
        btn.setAttribute('aria-selected', 'true');
        if (list) {
          const day = btn.dataset.day;
          list.querySelectorAll('[data-day]').forEach(s => {
            s.style.display = (!day || s.dataset.day === day) ? '' : 'none';
          });
        }
      });
    });
  });

  // ---- Mark current page in nav (defensive — works if href omitted) ----
  const here = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  document.querySelectorAll('.nav-links a').forEach(a => {
    const target = (a.getAttribute('href') || '').toLowerCase();
    if (target === here) a.setAttribute('aria-current', 'page');
  });
})();
