import Phaser, { Scene } from "phaser"
import { BLOCK_SIZE } from "../constants";

export class Player extends Phaser.GameObjects.Sprite {

  public canWalk: boolean = true;

  constructor(scene: Scene, x: number, y: number) {
    super(scene, x, y, 'player');
    this.scene.add.existing(this);
  }

  public walk(x: number, y: number, onFinish: () => void) {
    if (this.canWalk === false) return;
    this.canWalk = false;
    this.scene.add.tween({
      targets: this,
      x: this.x + BLOCK_SIZE * x,
      y: this.y + BLOCK_SIZE * y,
      duration: 200,
      onComplete: () => {
        onFinish();
        this.canWalk = true;
      }
    })
  }

}