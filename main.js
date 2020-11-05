const game = new Game();
function preload() {
  courtImg = loadImage("./Images/table.jpg");
  ballImg = loadImage("./Images/pongball.png");
  paddleImg = loadImage("./Images/ping-pong-paddle.png");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  game.setup();
}

function draw() {
  clear();
  background(0);
  game.draw();
}
