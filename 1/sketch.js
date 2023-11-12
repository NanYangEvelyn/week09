
let nSlider;

function setup() {
  createCanvas(windowWidth, windowHeight);
  nSlider = createSlider(1, 1000, 1, 10);
  nSlider.position(100,100);

 
}

let gridSize = 16;

function draw() {
  background(0);
  stroke(255);
  // noStroke();
  let nscale = nSlider.value();

  for(let y = 0; y <= height; y += gridSize){
    let rc = floor(random(0,256));
    for(let x = 0; x <= width; x += gridSize){
      let fc = 255*noise(x/nscale, y/nscale, frameCount/nscale);
      let aColor ;
      if(fc>200){
        aColor = "pink";
      }else if(fc>150){
        aColor = "gold"
      }else if(fc>90){
        aColor = "MediumPurple"
      }else{
        aColor = "peachpuff"
      }
      fill(aColor);
      rect(x,y,gridSize,gridSize);
    }
  
  
  }


}
