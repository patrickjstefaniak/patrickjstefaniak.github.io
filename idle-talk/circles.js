let initcolor = 255/2;
let rad; 
let radmax;
let r = initcolor + 20;
let g = initcolor - 20;
let b = initcolor;
let changemax = 1;
let sizechangemax = 20;

function setup() {
  rad = windowWidth/2;
  createCanvas(windowWidth, windowHeight);
  background(initcolor);
  noStroke();
  if(windowWidth > windowHeight){
    radmax = windowHeight - 50;
  }else{
    radmax = windowWidth - 50;
  }
}

function draw() {
  //background(initcolor,10);
  fill(r,g,b,5);
  circle(windowWidth/2, windowHeight/2, rad);
  rad = constrain(rad + random(-1*sizechangemax,sizechangemax),0, radmax);
  r = constrain(r + random(-1*changemax,changemax), 0, 255);
  g = constrain(g + random(-1*changemax,changemax), 0, 255);
  b = constrain(b + random(-1*changemax,changemax), 0, 255);
  changemax = constrain(changemax + random(-.1,.1),0,30);
  sizechangemax = constrain(sizechangemax + random(-.1,.1),0,30);
  if(random(0,10000) < 2){
    background(initcolor);
  }
}