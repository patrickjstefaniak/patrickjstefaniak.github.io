
//let blips;
let capture;
let i_size;

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.size(windowWidth,windowHeight);
  capture.hide();
  
  i_size = 1.0;
}

function draw() {
 
  capture.loadPixels();
  
  imageMode(CENTER);
  image(capture,windowWidth/2,windowHeight/2,windowWidth * i_size,windowHeight*i_size);
  i_size = i_size * .9999;
  // for(let l = 0; l < blips.length; l++){
  //   blips[l].count();
  // }
}

