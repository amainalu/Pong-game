const game = new Game();

function preload() {
  ballImg = loadImage("/Images/ball.png");
}

function setup() {
  createCanvas(WIDTH * 2, WIDTH);
}

function draw() {
  clear();
  background(0);
  game.draw();
}
