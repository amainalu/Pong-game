const game = new Game();
const intro = new Intro();

let level = "intro";

function preload() {
  courtImg = loadImage("./Images/table.jpg");
  ballImg = loadImage("./Images/pongball.png");
  paddleImg = loadImage("./Images/ping-pong-paddle.png");
  songBeg = loadSound("./Sounds/beginning cheers.mp3");
  songSlap = loadSound("./Sounds/ping-pong-1-sound-effect.mp3");
  songPoint = loadSound("./Sounds/applause.mp3");
}

function setup() {
  let canvas = createCanvas(WIDTH, HEIGHT);
  canvas.parent("canvas");
  intro.setup();
  game.setup();
}

function draw() {
  clear();

  if (level === "intro") {
    background(courtImg);
    intro.draw();
  } else {
    background(courtImg);
    game.draw();
  }
}

function startGame() {
  level = "level1";
  startButton.hide();
  songBeg.stop();
}
