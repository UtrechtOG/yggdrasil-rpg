// src/camera.js
import { CONFIG } from './config.js';

export class Camera {
  constructor() {
    this.x = 0;
    this.y = 0;
  }

  follow(player) {
    this.x = player.x + player.width / 2 - CONFIG.WIDTH / 2;
    this.y = player.y + player.height / 2 - CONFIG.HEIGHT / 2;

    if (this.x < 0) this.x = 0;
    if (this.y < 0) this.y = 0;
  }
}
