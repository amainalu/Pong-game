class Game {
  constructor() {
    this.player1 = new Player(20, 50);
    this.player2 = new Player(850, 50);
    this.ball = new Ball();
    this.score1 = 0;
    this.score2 = 0;
    this.background = new Background();
  }
  setup() {
    this.canvas = document.querySelector("canvas");
    this.canvas.style.position = "relative";
    this.canvas.style.zIndex = "-111";
    this.number = document.getElementById("number");
    this.number.style.display = "none";
  }
  draw() {
    this.background.draw();
    this.ball.velocity();
    this.ball.draw();
    this.player1.draw();
    this.player2.draw();

    this.ball.collisionCheckP1(this.player1);
    this.ball.collisionCheckP2(this.player2);
    this.player2Movement();

    fill(255, 255, 255, 250);
    rect(100, 5, 100, 40, 40);
    textSize(18);
    textStyle(BOLD);
    fill(0, 0, 0);
    text(`Away:${this.score1}`, 115, 30);
    fill(255, 255, 255, 250);
    rect(675, 5, 100, 40, 40);
    textSize(18);
    textStyle(BOLD);
    fill(0, 0, 0);
    text(`Home:${this.score2}`, 690, 30);

    this.edges(this.ball);
    // console.log("the score is changing");

    //move up
    if (keyIsDown(38)) {
      this.player1.moveUp(steps);
    }
    //move down
    if (keyIsDown(40)) {
      this.player1.moveDown(steps);
    }
    //move foward
    if (keyIsDown(39)) {
      this.player1.moveFoward(steps);
    }
    //move backwards
    if (keyIsDown(37)) {
      this.player1.moveBackwards(steps);
    }
  }

  edges(ball) {
    if (ball.x - radius > WIDTH) {
      songPoint.play();
      this.score1++;
      noLoop();
      this.counterClock(ball);

      // console.log(this.score1);
    }
    if (ball.x + radius < 0) {
      songPoint.play();
      this.score2++;
      noLoop();
      this.counterClock(ball);
      // create counter:^chec 0.01s
      // change display of this.number: check 0.01s
      // this.number.innerHTML = check the value of counter: 0.03s
      // this.intervalId = async -> immediately to the side:^0.0000001s:^check
      // ooh, here is another thing to do, like a loop
      // loop()
    }
  }

  counterClock(ball) {
    let counter = 4;

    this.number.style.display = "inline-block";
    this.number.innerHTML = counter;
    this.intervalId = setInterval(() => {
      counter--;
      this.number.innerHTML = counter;

      if (counter === 0) {
        clearInterval(this.intervalId);
        this.number.style.display = "none";
        ball.reset();
        loop();
      }
    }, 1000);
  }

  //player 2: machine movement.
  player2Movement() {
    this.player2.y += player2Speed;
    if (this.player2.y <= 0 || this.player2.y >= HEIGHT) {
      player2Speed = -player2Speed;
    }
  }
}

const selectedLevel = document.getElementById("level");
selectedLevel.addEventListener("change", (event) => {
  const value = event.target.value;
  if (value === "level1") {
    ySpeed += 0.5;
    xSpeed += 1;
  } else if (value === "level2") {
    ySpeed += 1;
    xSpeed += 1;
    player2Speed = 55;
  } else {
    ySpeed += 1.5;
    xSpeed += 1.5;
    player2Speed = 75;
  }
});
