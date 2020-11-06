class Player {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.height = 150;
    this.width = 90;
  }
  moveUp(steps) {
    if (this.y <= 0) {
      return;
    }
    this.y -= steps;
  }

  moveDown(steps) {
    if (this.y >= HEIGHT - this.height) {
      return;
    }
    this.y += steps;
  }
  moveFoward(steps) {
    if (this.x >= WIDTH - this.width) {
      return;
    }
    this.x += steps;
  }

  moveBackwards(steps) {
    if (this.x <= 0) {
      return;
    }
    this.x -= steps;
  }

  draw() {
    image(paddleImg, this.x, this.y, this.width, this.height);
  }
}
