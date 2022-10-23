class MoveAnimator {

  sprite;
  entity;

  x = 0;
  y = 0;

  timeToChangeTheSprites = 100;
  timeToMoveTheEntity = 1;

  _quantityOfTimesThatSpriteChanges = 0;
  _currentPosition = 0;

  direction = "down";
  quantityOfSpritesPerAnimation;

  firstSpriteTo = {
    "top":0,
    "right":0,
    "down":0,
    "left":0
  }

  setFirstSpriteTo(top, right, down, left) {
    this.firstSpriteTo["top"] = top;
    this.firstSpriteTo["right"] = right;
    this.firstSpriteTo["down"] = down;
    this.firstSpriteTo["left"] = left;
  }

  pixelsToJumpForEachSprite = {
    "top":0,
    "right":0,
    "down":0,
    "left":0
  }

  setPixelsToJumpForEachSprite(top, right, down, left) {
    this.pixelsToJumpForEachSprite["top"] = top;
    this.pixelsToJumpForEachSprite["right"] = right;
    this.pixelsToJumpForEachSprite["down"] = down;
    this.pixelsToJumpForEachSprite["left"] = left;
  }

  startMoveAnimation() {
    if(!this.sprite) return console.error("You must get a sprite first");
    this._setCurrentPositionOfSprite();
    setInterval(() => this._changeSprites(), this.timeToChangeTheSprites);
  }

  _setCurrentPositionOfSprite() {
    const direction = this.direction;
    const pixelsToJump = this.pixelsToJumpForEachSprite[direction];
    this._currentPosition = (pixelsToJump * this.firstSpriteTo[direction]) * -1;
  }

  _changeSprites() {
    const pixelsToJump = this.pixelsToJumpForEachSprite[this.direction];

    this.sprite.style.top = `${this._currentPosition - pixelsToJump}px`;
    const lastSpriteOfDirection = this.quantityOfSpritesPerAnimation - 1; 

    if(this._quantityOfTimesThatSpriteChanges === lastSpriteOfDirection) {
      return this._goToFirstSprite();
    }

    this._goToNextSprite(); 
  }

  _goToFirstSprite() {
    this._quantityOfTimesThatSpriteChanges = 0;
    this._setCurrentPositionOfSprite();
  }

  _goToNextSprite() {
    const pixelsToJump = this.pixelsToJumpForEachSprite[this.direction];
    this._quantityOfTimesThatSpriteChanges += 1;
    this._currentPosition -= pixelsToJump;
  }

  startToMoveCharacter() {
    const body = document.querySelector("body");
    body.addEventListener("keydown", (e) => this._defineControllers(e));
    setInterval(() => this._moveTheEntity(), this.timeToMoveTheEntity);
  }

  _defineControllers(e) {
    const keypress = e.key;
    if(keypress === "ArrowDown" && this.direction !== "top") {
      return this.direction = "down";
    }
    if(keypress === "ArrowUp" && this.direction !== "down") {
      return this.direction = "top";
    }
    if(keypress === "ArrowLeft" && this.direction !== "right") {
      return this.direction = "left";
    }
    if(keypress === "ArrowRight" && this.direction !== "left") {
      return this.direction = "right";
    }
  }

  _moveTheEntity() {
    const direction = this.direction;
    setTimeout(() => {
      if(direction === "right") return this._moveEntityToRight();
      if(direction === "left") return this._moveEntityToLeft();
      if(direction === "top") return this._moveEntityToTop();
      if(direction === "down") return this._moveEntityTodown();
    }, 100)
    
  }

  _moveEntityToRight() {
    this.entity.style.left = `${this.x}px`;
    this.x += 1;
  }

  _moveEntityToLeft() {
    this.entity.style.left = `${this.x}px`;
    this.x -= 1;
  }

  _moveEntityToTop() {
    this.entity.style.top = `${this.y}px`;
    this.y -= 1;
  }

  _moveEntityTodown() {
    this.entity.style.top = `${this.y}px`;
    this.y += 1;
  }
}