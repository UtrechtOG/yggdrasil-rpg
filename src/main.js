// src/main.js
import './keyboard.js';
import './touch.js';

import { ctx } from './canvas.js';
import { CONFIG } from './config.js';
import { input } from './input.js';
import { Player } from './player.js';
import { drawPlayer } from './renderer.js';

const player = new Player();

function update() {
  player.update(input);
}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

  drawPlayer(ctx, player);

  // Debug Input
  ctx.fillStyle = 'white';
  ctx.font = '14px monospace';
  ctx.fillText('INPUT:', 10, 20);

  let y = 40;
  for (const key in input) {
    ctx.fillText(`${key}: ${input[key]}`, 10, y);
    y += 18;
  }
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
