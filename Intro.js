class Intro {
  constructor() {
    this.x = 0;
  }
  setup() {
    songBeg.play();
    this.height = HEIGHT;
    this.width = WIDTH;
    startButton = createButton("Start Game");
    startButton.position(900, 250);
    startButton.addClass("startbutton");
    startButton.mousePressed(startGame);
  }

  draw() {}
}
