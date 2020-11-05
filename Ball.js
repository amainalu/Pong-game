class Ball {
  constructor(x) {
    this.x = 400;
    this.y = 200;
    this.diameter = diameter;
    this.radius = radius;
  }

  draw() {
    this.velocity();

    fill(255, 255, 255);
    noStroke();
    image(ballImg, this.x, this.y, this.diameter, this.diameter);
  }

  velocity() {
    this.x += xSpeed;
    this.y += ySpeed;

    if (this.y > HEIGHT - this.diameter || this.y < this.diameter) {
      ySpeed = -ySpeed;
    }
  }

  edges() {
    if (this.x - radius > WIDTH) {
      this.reset();
    }
    if (this.x + radius < 0) {
      this.reset();
    }
  }

  reset() {
    this.x = 400;
    this.y = 200;
  }

  collisionCheckP1(player) {
    const ballLeftSide = this.x - this.radius;
    const ballBottomSide = this.y + this.radius;
    const ballTopSide = this.y - this.radius;
    const ballRightSide = this.x + this.radius;
    const player1RightSide = player.x + player.width;
    const player1LeftSide = player.x;
    const player1TopSide = player.y;
    const player1BottomSide = player.y + player.height;

    if (
      ballLeftSide <= player1RightSide &&
      ballBottomSide >= player1TopSide &&
      ballTopSide <= player1BottomSide &&
      ballRightSide >= player1LeftSide
    ) {
      // console.log("touching");
      xSpeed = -xSpeed;
    }
    // const isNotToTheLeft = player1RightSide >= ballLeftSide;
    // const isNotToTheTop = player1TopSide <= ballBottomSide;
    // const isNotToBottom = player1BottomSide >= ballTopSide;
    // if (isNotToTheLeft && isNotToTheTop && isNotToBottom) {
    //   xSpeed = -xSpeed;
    // }
  }

  collisionCheckP2(player) {
    const ballRightSide = this.x + this.radius;
    const ballLeftSide = this.x - this.radius;
    const ballBottomSide = this.y + this.radius;
    const ballTopSide = this.y - this.radius;
    const player2LeftSide = player.x;
    const player2RightSide = player.x + player.width;
    const player2TopSide = player.y;
    const player2BottomSide = player.y + player.height;

    if (
      ballRightSide >= player2LeftSide &&
      ballBottomSide >= player2TopSide &&
      ballTopSide <= player2BottomSide &&
      ballLeftSide <= player2RightSide
    ) {
      //  console.log("touching");
      xSpeed = -xSpeed;
    }
  }

  // const ballIsTouchingPlayer1 = (ballLeftSide === player1RightSide) && (ballBottomSide <= player1BottomSide) && (ballTopSide >=player1TopSide)

  // const ballIsTouchingPlayer2 = (ballRightSide === player2LeftSide) && (ballBottomSide <= player2BottomSide) && (ballTopSide >=player2TopSide
}
