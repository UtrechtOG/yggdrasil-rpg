// src/main.js
import './keyboard.js';
import './touch.js';

import { ctx } from './canvas.js';
import { CONFIG } from './config.js';
import { input } from './input.js';

import { Player } from './player.js';
import { drawPlayer } from './renderer.js';
import { GameMap } from './map.js';
import { Camera } from './camera.js';

const player = new Player();
const gameMap = new GameMap();
const camera = new Camera();

function update() {
  player.update(input);
  camera.follow(player);
}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

  gameMap.draw(ctx, camera);
  drawPlayer(ctx, player);
}

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
