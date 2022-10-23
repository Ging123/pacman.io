class Player extends MoveAnimator {

  constructor() {
    super();
  }

  startToMove() {
    this.quantityOfSpritesPerAnimation = 3;
    this.sprite = document.querySelector(".player--sprite");

    this.setFirstSpriteTo(8, 0, 3, 6);
    this.setPixelsToJumpForEachSprite(42.2, 40, 42, 42);

    this.startMoveAnimation();
    this.entity = document.querySelector(".player");

    this.startToMoveCharacter();
  }
}

const player = new Player();
player.startToMove();