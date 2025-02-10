let blossss;
//let blips;

function setup() {
  createCanvas(windowWidth, windowHeight);
  blossss = [];
  for(let l = 0; l < 100; l++){
    for(let m = 0; m < 100; m++){
      let b = new Bloss(l * windowWidth/100, m * windowHeight/100);
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

}

function draw() {
  background(220);
  for(let l = 0; l < blossss.length; l++){
    blossss[l].tickk();
    //blossss.drawbloss();
  }
  // for(let l = 0; l < blips.length; l++){
  //   blips[l].count();
  // }
}

class Bloss{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.r = 0;
    this.g = 0;
    this.b = 0;
  }
  drawbloss(){
    
  }
  tickk(){
    //print("tick")
    this.r += randStep();
    this.g += randStep();
    this.b += randStep();
    if(this.r > 255) this.r = 0;
    if(this.g > 255) this.g = 0;
    if(this.b > 255) this.b = 0;
    fill(this.r, this.g, this.b)
    rect(this.x, this.y, windowWidth/90, windowHeight/90);
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
  return random(0,100) < 50 ? 1 : 0;
}