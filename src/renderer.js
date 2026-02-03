// src/renderer.js
export function drawPlayer(ctx, player) {
  ctx.fillStyle = 'white';
  ctx.fillRect(player.x, player.y, player.width, player.height);

  // Richtung anzeigen (Debug)
  ctx.fillStyle = 'yellow';
  ctx.font = '12px monospace';
  ctx.fillText(player.direction, player.x, player.y - 4);
}
