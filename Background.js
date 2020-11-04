class Background {
  constructor() {
    this.x = 0;
  }
  setup() {
    this.height = HEIGHT;
    this.width = WIDTH;
  }

  draw() {
    image(courtImg, this.x, 0, this.width, this.height);
  }
}
