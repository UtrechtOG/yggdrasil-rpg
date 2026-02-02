import { ctx } from './canvas.js';
import { CONFIG } from './config.js';

function update() {
  // später Logik
}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
