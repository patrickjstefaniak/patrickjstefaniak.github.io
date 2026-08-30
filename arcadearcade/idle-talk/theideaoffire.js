function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(230, 230, 240);
  stroke(random(230,240),random(230,240),random(230,250));
  line(windowWidth/3,windowHeight/2,windowWidth*2/3,windowHeight/2);
  let bandwidth = random(1,100);
  let jumpp = random (10,200);
  let steps = windowWidth/(jumpp + bandwidth);
  for(let j = 0; j < steps; j++){
    stroke(random(230,240),random(230,240),random(230,250));
    
    let pos = j * jumpp;
    line(pos,0,pos,windowHeight);
    for(let i = 0; i < bandwidth; i++){
      stroke(random(230,240),random(230,240),random(230,250),random(0,110));
      line(pos + i,0,pos + i,windowHeight);
    }
  }
  
  
}