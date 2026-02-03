// src/touch.js
import { input } from './input.js';

function bind(id, key) {
  const el = document.getElementById(id);
  if (!el) return;

  el.addEventListener('touchstart', (e) => {
    e.preventDefault();
    input[key] = true;
  });

  el.addEventListener('touchend', (e) => {
    e.preventDefault();
    input[key] = false;
  });
}

bind('btn-up', 'up');
bind('btn-down', 'down');
bind('btn-left', 'left');
bind('btn-right', 'right');
bind('btn-action', 'action');
bind('btn-menu', 'menu');
