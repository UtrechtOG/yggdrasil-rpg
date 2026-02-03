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

/* MUSS IDENTISCH ZU CSS SEIN */
const UI_HEIGHT = 240;
const MAP_LIMIT_Y = CONFIG.HEIGHT - UI_HEIGHT;

function update() {
  player.update(input);

  /* Harte Map-Grenze */
  if (player.y + player.height > MAP_LIMIT_Y) {
    player.y = MAP_LIMIT_Y - player.height;
  }

  /* Input-Timer */
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

  /* Debug */
  debugEl.innerHTML = '';
  for (const key in inputTime) {
    if (inputTime[key] > 0) {
      const line = document.createElement('div');
      line.textContent = `${key} : ${inputTime[key].toFixed(2)}s`;
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
