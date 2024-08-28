import type { Game } from "../Game";

export class PlayerMoveAction {
  constructor(
    private readonly game: Game
  ) {
  }

  public execute(id: string, direction: string) {
    const player = this.game.players[id];
    if (player) {
      switch (direction) {
        case "left": player.x -= 1; break;
        case "right": player.x += 1; break;
        case "up": player.y -= 1; break;
        case "down": player.y += 1; break;
        default:
          break;
      }
    }
  }
}