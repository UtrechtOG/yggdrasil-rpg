// src/player.js
import { CONFIG } from './config.js';

export class Player {
  constructor() {
    this.x = CONFIG.WIDTH / 2;
    this.y = CONFIG.HEIGHT / 2;

    this.width = 24;
    this.height = 24;

    this.speed = 2;

    this.direction = 'down';
  }

  update(input) {
    let moving = false;

    if (input.up) {
      this.y -= this.speed;
      this.direction = 'up';
      moving = true;
    }

    if (input.down) {
      this.y += this.speed;
      this.direction = 'down';
      moving = true;
    }

    if (input.left) {
      this.x -= this.speed;
      this.direction = 'left';
      moving = true;
    }

    if (input.right) {
      this.x += this.speed;
      this.direction = 'right';
      moving = true;
    }

    // Bildschirm-Grenzen
    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
    if (this.x + this.width > CONFIG.WIDTH) {
      this.x = CONFIG.WIDTH - this.width;
    }
    if (this.y + this.height > CONFIG.HEIGHT) {
      this.y = CONFIG.HEIGHT - this.height;
    }
  }
}
