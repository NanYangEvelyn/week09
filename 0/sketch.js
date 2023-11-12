
let nSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nSlider = createSlider(1, 1000, 1, 10);
  nSlider.position(100,100);

 
}

// let gridSize = 2;

function draw() {
  background(0);
  stroke(255,200,200);
  let nscale = nSlider.value();

  for(let i = 0; i < width; i++){
    let y = height * noise(i/nscale);
    // let y = map(noise(i),0,1,0,height);
   line(i,height /2, i ,y);
  }

  let x = frameCount % width;
  let y = height * noise(x / nscale);
  fill(255);
  ellipse(x,y,20,20);

}
