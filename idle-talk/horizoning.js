let r;
let g;
let b;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  //baseColor = color(random(240,255),random(240,255),random(240,255));
  r = random(240,255);
  g = random(240,255);
  b = random(240,255);
  background(r,g,b,random(0,5));
  //stroke(random(230,240),random(230,240),random(230,250));
  //line(windowWidth/2,0,windowWidth/2,windowHeight);
  let bandwidth = random(10,50);
  let jumpp = random (10,50);
  let steps = windowHeight/(jumpp + bandwidth);
  //strokeWeight(random(1,5));
  for(let j = 0; j < steps; j++){
    let pos = j * jumpp;
    for(let i = 0; i < bandwidth; i++){
      //print(baseColor.r);
      stroke(random(r - 10,r + 10),random(g - 10,g + 10),random(b - 10,b + 10),random(1,10));
      line(0,pos + i,windowWidth,pos + i);
    }
  }
  
  
}