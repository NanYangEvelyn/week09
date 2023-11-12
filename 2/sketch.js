
let nSlider;
let particles = [];

function createParticles() {
  for (let c = 0; c < 50; c++) {
    particles.push({
      x: random(width),
      y: random(height),
    })
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  nSlider = createSlider(1, 1000, 1, 10);
  nSlider.position(100,100);
  createParticles();
 
}

let gridSize = 16;

function draw() {

  stroke(255);
  // noStroke();
  let nscale = nSlider.value();

  for(let pi = 0; pi < particles.length;pi ++){
    let p = particles[pi];
    point(p.x,p.y);
    let nx = noise(p.x / nscale, p.x/nscale);
    let ny = noise(p.y / nscale, p.y/nscale);
    let vx = map(nx,0,1,-3,3);
    let vy = map(ny,0,1,-3,3);

    p.x += vx;
    p.y += vy;
    
    let stopped = (abs(vx) < 0.1 && abs(vy) < 0.1);
    if(p.x < 0 || p.x > width || p.y > height || p.y<0 || stopped){
      p.x = random(width);
      p.y = random(height);
    }
  }


}