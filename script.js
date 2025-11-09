window.addEventListener('DOMContentLoaded', () => {
  if (window.lucide?.createIcons) lucide.createIcons();
});


const $ = (sel, ctx = document) => ctx.querySelector(sel);
const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));


(() => {
  const here = location.pathname.split('/').pop() || 'index.html';
  $$('.menu a').forEach(a => {
    const href = a.getAttribute('href');
    if (href === here) a.classList.add('active');
  });
})();


(() => {
  const header = $('header.site-header');
  if (!header) return;
  const onScroll = () => header.classList.toggle('scrolled', (window.scrollY || document.documentElement.scrollTop) > 10);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();


(() => {
  const btn = $('#backToTop');
  if (!btn) return;
  const onScroll = () => {
    const y = window.scrollY || document.documentElement.scrollTop;
    btn.classList.toggle('show', y > 400);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
  btn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
})();


(() => {
  const faq = $('.faq');
  if (!faq) return;
  const items = $$('.faq details');
  items.forEach(d => {
    d.addEventListener('toggle', () => {
      if (d.open) items.forEach(o => { if (o !== d) o.open = false; });
    });
  });
})();