// src/map.js
import { CONFIG } from './config.js';

export class GameMap {
  constructor() {
    this.tileSize = 32;

    this.width = 50;   // Tiles
    this.height = 50;

    this.tiles = [];

    for (let y = 0; y < this.height; y++) {
      const row = [];
      for (let x = 0; x < this.width; x++) {
        row.push(Math.random() > 0.2 ? 0 : 1);
      }
      this.tiles.push(row);
    }
  }

  draw(ctx, camera) {
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        const tile = this.tiles[y][x];

        const screenX = x * this.tileSize - camera.x;
        const screenY = y * this.tileSize - camera.y;

        if (
          screenX + this.tileSize < 0 ||
          screenY + this.tileSize < 0 ||
          screenX > CONFIG.WIDTH ||
          screenY > CONFIG.HEIGHT
        ) {
          continue;
        }

        ctx.fillStyle = tile === 0 ? '#1f1f1f' : '#2f2f2f';
        ctx.fillRect(screenX, screenY, this.tileSize, this.tileSize);
      }
    }
  }
}
