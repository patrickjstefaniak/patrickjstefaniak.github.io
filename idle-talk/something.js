function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(249);
  fill(255,255,255,96);
  noStroke();
  let steps = 20;
  for(i = 0; i < steps; i++){
    let win = windowHeight;
    if(win > windowWidth){
      win = windowWidth;
    }
    arc(windowWidth/2,windowHeight/2,win/steps*i,win/steps*i,random(-PI,PI),random(-PI,PI));
  }
}