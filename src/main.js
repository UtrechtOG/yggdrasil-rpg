// src/main.js
import './keyboard.js';
import './touch.js';

import { ctx } from './canvas.js';
import { CONFIG } from './config.js';
import { input } from './input.js';
import { Player } from './player.js';
import { drawPlayer } from './renderer.js';

const player = new Player();
const debugEl = document.getElementById('input-debug');

function update() {
  player.update(input);
}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

  drawPlayer(ctx, player);

  // Debug-Text für Controller
  let active = [];
  for (const key in input) {
    if (input[key]) active.push(key);
  }

  debugEl.textContent = active.length
    ? 'INPUT: ' + active.join(', ')
    : 'INPUT: none';
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
