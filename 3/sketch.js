let mSpeech

function setup() {
  createCanvas(windowWidth,windowHeight);
  mSpeech = new p5.Speech();
}



function draw() {
background(0);

}

function mouseClicked() {
  mSpeech.speak ('hi');
  print (mSpeech.listVoices());
}