
document.addEventListener('DOMContentLoaded', () => {
  const wrap = document.querySelector('.team-svg');
  if (!wrap) return;
  const svg  = wrap.querySelector('svg');
  const tip  = wrap.querySelector('#member-tip');
  const nameEl = tip.querySelector('.member-name');
  const roleEl = tip.querySelector('.member-role');

  // smart placement to keep tooltip inside wrapper + set arrow direction
  function positionTip(clientX, clientY){
    const r = wrap.getBoundingClientRect();
    const pad = 12; // edge padding
    const mouseX = clientX - r.left;
    const mouseY = clientY - r.top;

    // temporarily show to measure
    const prevHidden = tip.hidden;
    if (prevHidden) { tip.hidden = false; tip.style.left = '-9999px'; tip.style.top = '-9999px'; }
    const tr = tip.getBoundingClientRect();
    const w = tr.width, h = tr.height;

    // default place to the right & a bit up
    let left = mouseX + 16, top = mouseY - 16;
    let dir = 'right';

    // flip horizontally if overflowing right
    if (left + w > r.width - pad) { left = mouseX - w - 16; dir = 'left'; }
    if (left < pad) { left = pad; dir = 'right'; } // clamp left

    // flip vertically if going above/top or below/bottom
    if (top < pad) { top = mouseY + 18; dir = 'bottom'; }
    if (top + h > r.height - pad) { top = mouseY - h - 18; dir = 'top'; }
    if (top < pad) top = pad; // clamp top

    tip.style.left = `${left}px`;
    tip.style.top  = `${top}px`;
    tip.classList.remove('dir-left','dir-right','dir-top','dir-bottom');
    tip.classList.add(`dir-${dir}`);

    if (prevHidden) tip.hidden = false; // ensure shown for next call
  }

  function showTip(target, clientX, clientY){
    nameEl.textContent = target.dataset.name || '';
    roleEl.textContent = target.dataset.role || '';
    tip.hidden = false;
    // trigger entry animation
    requestAnimationFrame(() => tip.classList.add('is-visible'));
    positionTip(clientX, clientY);
  }

  function clearHover(){
    // fade out smoothly, then hide
    tip.classList.remove('is-visible');
    const hide = () => { tip.hidden = true; tip.removeEventListener('transitionend', hide); };
    tip.addEventListener('transitionend', hide, { once: true });
  }

  // If you already have listeners, keep them; else minimal setup:
  const people = svg.querySelectorAll('image[data-name]');
  people.forEach(el => {
    el.addEventListener('mouseenter', e => showTip(el, e.clientX, e.clientY));
    el.addEventListener('mousemove',  e => positionTip(e.clientX, e.clientY));
    el.addEventListener('mouseleave', clearHover);
    el.addEventListener('touchstart', e => {
      e.preventDefault();
      const t = e.touches[0];
      showTip(el, t.clientX, t.clientY);
    }, { passive: false });
  });
  document.addEventListener('touchstart', e => {
    if (!wrap.contains(e.target)) clearHover();
  }, { passive: true });
});

