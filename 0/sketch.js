function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  fill(0);
  rect(width / 2.5, height / 4, width / 20, height / 2);
  rect(width - width / 2.5 - width / 20, height / 4, width / 20, height / 2);
  rect(width / 2.5 + width / 20, height / 4 - width / 20, width - 2 * width / 2.5 - 2 * width / 20, width / 20);
  rect(width / 2.5 + width / 20, height / 4 + height / 2, width - 2 * width / 2.5 - 2 * width / 20, width / 20);
}
