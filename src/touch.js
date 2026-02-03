// src/touch.js
import { input, inputTime } from './input.js';

function bind(id, key) {
  const el = document.getElementById(id);
  if (!el) return;

  el.addEventListener('touchstart', (e) => {
    e.preventDefault();
    input[key] = true;
    el.classList.add('active');
  }, { passive: false });

  el.addEventListener('touchend', () => {
    input[key] = false;
    inputTime[key] = 0;
    el.classList.remove('active');
  });

  el.addEventListener('touchcancel', () => {
    input[key] = false;
    inputTime[key] = 0;
    el.classList.remove('active');
  });
}

bind('btn-up', 'up');
bind('btn-down', 'down');
bind('btn-left', 'left');
bind('btn-right', 'right');
bind('btn-action', 'action');
bind('btn-menu', 'menu');
