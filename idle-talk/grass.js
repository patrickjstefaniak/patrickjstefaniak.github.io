

// let r = 220;
// let g = 220;
// let b = 220;
let c ;
let timer = 0;
let bgtimer = 1000;
let bgctimer = 1001;
let bgc;
let bgOn = true;
let isOn = false;
let isVertical = true;
let r = 5;
let rx= 0;
let ry = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  bgc = color(255/2);
  c = color(0);
  noStroke();
}

function draw() {
  bgtimer --;
  if(bgtimer <= 0){
    bgtimer = random(1,5000);
    bgOn = !bgOn;
    
  }
  bgctimer --;
  if(bgctimer <= 0){
    bgc = color(random(0,255),random(0,255),random(0,255));
    bgctimer = random(1,5000);
  }
  
  if(bgOn){
    background(bgc);
  }
  
  fill(c);
  //if(isOn){
    for(let l = 0; l < windowWidth; l += windowWidth / r + rx){
      for(let k = 0; k < windowHeight; k+=windowHeight/r*2){
        rect(l,k,windowWidth/r, windowHeight/r)
      }
      l += windowWidth/r;
      for(let k = windowHeight/r; k < windowHeight; k+=windowHeight/r*2 + ry){
        rect(l,k,windowWidth/r, windowHeight/r)
      }
    }
  //}
  blink();
}

function blink(){
  timer --;
  if(timer<0){
    timer = random(1,400);
    
      c = color(random(0,255), random(0,255), random(0,255));
      
      r= random(50,400);
      if(random(0,40) < 20){
        r = random(2,50);
      }

      // if(random(0,100) < 25){
      //   rx = random(0,10);
      // }else{
      //   rx = 0;
      // }

      // if(random(0,100) < 25){
      //   ry = random(0,10);
      // }else{
      //   ry = 0;
      // }
      
    isOn = !isOn;

    }
    

  
}

