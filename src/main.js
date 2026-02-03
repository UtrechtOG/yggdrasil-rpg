// src/main.js
import './keyboard.js';
import './touch.js';

import { ctx } from './canvas.js';
import { CONFIG } from './config.js';
import { input } from './input.js';

function update() {}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

  ctx.fillStyle = 'white';
  ctx.font = '18px monospace';
  ctx.fillText('INPUT STATE:', 20, 30);

  let y = 60;
  for (const key in input) {
    ctx.fillText(`${key}: ${input[key]}`, 20, y);
    y += 22;
  }
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
