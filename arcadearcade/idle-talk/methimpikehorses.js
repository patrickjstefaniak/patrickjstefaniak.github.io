let blossss;
//let blips;
let capture;
let resolu = 200;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blossss = [];
  for(let l = 0; l < resolu; l++){
    for(let m = 0; m < resolu; m++){
      let b = new Bloss(l * windowWidth/resolu, m * windowHeight/resolu, l,m);
      blossss.push(b);
    }
  }
  noStroke();
  // blips = [];
  // for(let l = 0; l < 4; l++){
  //   let b = new Blip();
  //   blips.push(b);
  // }
  // userStartAudio();
  capture = createCapture(VIDEO);
  capture.size(resolu,resolu);
  capture.hide();
}

function draw() {
  background(220);
  capture.loadPixels();
  for(let l = 0; l < blossss.length; l++){
    blossss[l].tickk();
    //blossss.drawbloss();
  }
  tint(255,255,255,80);
  //image(capture,0,0,windowWidth,windowHeight);
  // for(let l = 0; l < blips.length; l++){
  //   blips[l].count();
  // }
}

class Bloss{
  constructor(x,y,xl,yl){
    this.x = x;
    this.y = y;
    this.r = 0;
    this.g = 0;
    this.b = 0;
    this.xl = xl;
    this.yl = yl;
  }
  drawbloss(){
    
  }
  tickk(){
    //print("tick")
    this.r += randStep();
    this.g += randStep();
    this.b += randStep();
    let um = this.xl + (this.yl*resolu);
    this.r += (255-capture.pixels[0+(um*4)])/256;
    this.g += (255-capture.pixels[1+(um*4 )])/512;
    this.b += (255-capture.pixels[2+(um*4)])/1024;
    if(this.r > 255) this.r = 0;
    if(this.g > 255) this.g = 0;
    if(this.b > 255) this.b = 0;
    fill(this.r, this.g, this.b)
    rect(this.x, this.y, windowWidth/resolu, 90);
  }


}

// class Blip{
//   constructor(){
//     this.n = 0;
//     this.synth = new p5.MonoSynth();
//     this.synth.setADSR(1,.1,.5,.5);
//     this.timer = 100;
//   }
//   count(){
//     this.timer --;
//     if(this.timer <= 0){
//       this.timer = random(10,100);
//       this.n += random(0,120);
//       if(this.n > 800) this.n = 0;
//       this.synth.play(this.n, .01, 0, 2);
//       print("blip")
//     }
    
//   }

// }


function randStep(){
  return random(0,100) < 50 ? 0 : 0;
}