import { Utils } from "../utils/Utils";
import type { Game } from "../Game";

export class PlayerCreateAction {
  constructor(
    private readonly game: Game
  ) {
  }

  public execute(id: string) {
    console.log("player connected", id);
    this.game.players[id] = {
      id: id,
      x: 0,
      y: 0,
      hp: 100
    }
  }
}