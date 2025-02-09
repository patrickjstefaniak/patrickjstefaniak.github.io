let monoSynth;
let s;
let bgtimer = 30;

let rb = 200;
let gb = 200;
let bb = 200;
let rt = 50;
let gt = 50;
let bt = 50;
let x = 0;
let y = 0;
let bgtimerr = 60;
let size = 50;
let num1;
let num2;


function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mousePressed(playSynth);
  background(220);
  frameRate(60);

  monoSynth = new p5.MonoSynth();
  monoSynth.setADSR(0,.3,.5,.7);
  noStroke()
  if(windowWidth > windowHeight){
    num1 = new Numb(windowWidth/3, windowHeight/2);
    num2 = new Numb(windowWidth/3*2, windowHeight/2);
  }else{
    num1 = new Numb(windowWidth/2, windowHeight/3);
    num2 = new Numb(windowWidth/2, windowHeight/3*2);
  }
}

function draw(){
  background(rb,gb,bb);
  bgtimer --;
  if (bgtimer <= 0){
    bgtimer = bgtimerr;
    
      
    rb += steppin();
    gb += steppin();
    bb += steppin();
    bgtimerr += steppin();
    
  }
  //stroke(rt,gt,bt);
  num1.time();
  num2.time();
  num1.drawNum();
  num2.drawNum();
}

function playSynth() {
  userStartAudio();
  s = true;

//   let note = random(['Fb4', 'G4']);
//   // note velocity (volume, from 0 to 1)
//   let velocity = random();
//   // time from now (in seconds)
//   let time = 0;
//   // note duration (in seconds)
//   let dur = 1;

//   monoSynth.play(note, velocity, time, dur);
}

class Numb{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.timer = 60;
    this.timerr = 60;
    this.r = 50;
    this.g = 50;
    this.b = 50;
    this.n = 100;
    this.size = 50;
    this.note = 300;
    this.synth = new p5.MonoSynth();
  }

  count(){
    this.x += steppin();
    this.y += steppin();
    this.timerr += steppin();
    this.r += steppin();
    this.g += steppin();
    this.b += steppin();
    this.n += steppin();
    this.size += steppin();
    this.note += steppin();
  }

  playNote(){
    this.synth.play(this.note, .5, 0, .1);
  }

  drawNum(){
    fill(this.r,this.g,this.b);
    textSize(this.size);
    text(this.n, this.x, this.y);
  }

  time(){
    this.timer --;
    if(this.timer <= 0){
      this.timer = this.timerr;
      this.count();
      if(s){
        this.playNote();
      }
    }
    
  }
}

function steppin(){
   
  return random(0,100) < 50 ? 1 : -1 ;
}
