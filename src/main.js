// src/main.js
import './keyboard.js';
import './touch.js';

import { ctx } from './canvas.js';
import { CONFIG } from './config.js';
import { input, inputTime } from './input.js';

import { Player } from './player.js';
import { drawPlayer } from './renderer.js';
import { GameMap } from './map.js';
import { Camera } from './camera.js';

/* ===============================
   INITIALISIERUNG
================================ */

const player = new Player();
const gameMap = new GameMap();
const camera = new Camera();

const debugEl = document.getElementById('input-debug');

/* UI-HÖHE MUSS ZU CSS PASSEN */
const UI_HEIGHT = 240;
const MAP_LIMIT_Y = CONFIG.HEIGHT - UI_HEIGHT;

/* ===============================
   UPDATE
================================ */

function updatePlayer() {
  player.update(input);

  // HARTE MAP-GRENZE (Player darf NICHT in UI)
  if (player.y + player.height > MAP_LIMIT_Y) {
    player.y = MAP_LIMIT_Y - player.height;
  }

  if (player.y < 0) {
    player.y = 0;
  }
}

function updateCamera() {
  camera.follow(player);
}

function updateInputTimers() {
  for (const key in input) {
    if (input[key]) {
      inputTime[key] += 1 / 60;
    }
  }
}

function update() {
  updatePlayer();
  updateCamera();
  updateInputTimers();
}

/* ===============================
   RENDER
================================ */

function renderMap() {
  gameMap.draw(ctx, camera);
}

function renderPlayer() {
  drawPlayer(ctx, player);
}

function renderDebug() {
  if (!debugEl) return;

  debugEl.innerHTML = '';

  let hasInput = false;

  for (const key in inputTime) {
    if (inputTime[key] > 0) {
      hasInput = true;
      const line = document.createElement('div');
      line.textContent = `${key} : ${inputTime[key].toFixed(2)}s`;
      debugEl.appendChild(line);
    }
  }

  if (!hasInput) {
    debugEl.textContent = 'INPUT: none';
  }
}

function render() {
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 0, CONFIG.WIDTH, CONFIG.HEIGHT);

  renderMap();
  renderPlayer();
  renderDebug();
}

/* ===============================
   GAME LOOP
================================ */

function gameLoop() {
  update();
  render();
  requestAnimationFrame(gameLoop);
}

gameLoop();
