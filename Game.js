class Game {
  constructor() {
    this.player1 = new Player(20, 50);
    this.player2 = new Player(700, 50);
    this.ball = new Ball();
    this.score1 = 0;
    this.score2 = 0;
  }
  setup() {}
  draw() {
    this.ball.draw();
    this.player1.draw();
    this.player2.draw();
    this.ball.velocity();

    //this.edges();
    //this.ball.reset();

    fill(255, 255, 255, 200);
    rect(100, 10, 325, 30, 40);
    textSize(18);
    textStyle(BOLD);
    fill(0, 0, 0);
    text(`score:${this.score1}  score:${this.score2}`, 125, 30);

    this.edges(this.ball);
    // console.log("the score is changing");

    //move up
    if (keyIsDown(38)) {
      this.player1.moveUp(5);
    }
    //move down
    if (keyIsDown(40)) {
      this.player1.moveDown(5);
    }
    //move foward
    if (keyIsDown(39)) {
      this.player1.moveFoward(5);
    }
    //move backwards
    if (keyIsDown(37)) {
      this.player1.moveBackwards(5);
    }
    //collision
    this.ball.collisionCheckP1(this.player1);

    this.ball.collisionCheckP2(this.player2);

    this.player2Movement();
  }

  showScore() {}

  edges(ball) {
    if (ball.x - radius > WIDTH * 2) {
      ball.reset();
      this.score1++;
      // console.log(this.score1);
    }
    if (ball.x + radius < 0) {
      ball.reset();
      this.score2++;
    }
  }

  //player 2: machine movement.
  player2Movement() {
    this.player2.y += player2Speed;
    if (this.player2.y <= 0 || this.player2.y === WIDTH - 50) {
      player2Speed = -player2Speed;
    }
  }
}
