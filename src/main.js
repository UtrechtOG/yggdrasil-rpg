// src/main.js
import './keyboard.js';
import { ctx } from './canvas.js';
import { CONFIG } from './config.js';
import { input } from './input.js';

function update() {
  // später Player-Logik
}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

  // sichtbares Debug (Android!)
  ctx.fillStyle = 'white';
  ctx.font = '16px monospace';
  ctx.fillText('INPUT:', 20, 30);

  let y = 50;
  for (const key in input) {
    if (input[key]) {
      ctx.fillText(key, 20, y);
      y += 20;
    }
  }
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
