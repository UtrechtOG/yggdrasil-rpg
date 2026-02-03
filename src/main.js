// src/main.js
import './keyboard.js';
import './touch.js';

import { ctx } from './canvas.js';
import { CONFIG } from './config.js';
import { input, inputTime } from './input.js';
import { Player } from './player.js';
import { drawPlayer } from './renderer.js';

const player = new Player();
const debugEl = document.getElementById('input-debug');

const UI_LIMIT = CONFIG.HEIGHT - 200;

function update() {
  player.update(input);

  // Begrenzung durch UI
  if (player.y + player.height > UI_LIMIT) {
    player.y = UI_LIMIT - player.height;
  }

  // Input-Timer
  for (const key in input) {
    if (input[key]) {
      inputTime[key] += 1 / 60;
    }
  }
}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

  drawPlayer(ctx, player);

  // Debug
  debugEl.innerHTML = '';
  for (const key in inputTime) {
    if (inputTime[key] > 0) {
      const line = document.createElement('div');
      line.textContent = `${key}: ${inputTime[key].toFixed(2)}s`;
      debugEl.appendChild(line);
    }
  }
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
