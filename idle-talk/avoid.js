

// let r = 220;
// let g = 220;
// let b = 220;
let c ;
let c2;
let c3 ;
let c4;
let timer = 0;
let isOn = false;
let rec ;
let rec2;
let rec3;
let rec4;
let bg;


function setup() {
  createCanvas(windowWidth, windowHeight);
  rec = {x: 0, y:0 , w:0, h:0};
  rec2 = {x: 0, y:0 , w:0, h:0};
  rec3 = {x: 0, y:0 , w:0, h:0};
  rec4 = {x: 0, y:0 , w:0, h:0};
  bg = color(255/2);
  c = color(0);
  c2 = color(0);
  c3 = color(0);
  c4 = color(0);
  noStroke();
}

function draw() {
  background(bg);
  
  fill(c);
  rect(rec.x,rec.y,rec.w,rec.h);
  fill(c2);
  rect(rec2.x,rec2.y,rec2.w,rec2.h);
  fill(c3);
  rect(rec3.x,rec3.y,rec3.w,rec3.h);
  fill(c4);
  rect(rec4.x,rec4.y,rec4.w,rec4.h);
  blink();
}

function blink(){
  timer --;
  if(timer<0){
    timer = random(1,1000);
    
      c = color(random(0,255), random(0,255), random(0,255));
      c2 = color(random(0,255), random(0,255), random(0,255));
      c3 = color(random(0,255), random(0,255), random(0,255));
      c4 = color(random(0,255), random(0,255), random(0,255));
      bg = color(random(0,255), random(0,255), random(0,255));
      
      let ran = random(0,800);
      if(ran < 100){
        //one quarter sq
        rec = {x: 0, y:0 , w:windowWidth/2, h:windowHeight/2};
        rec2 = {x: 0, y:0 , w:0, h:0};
        rec3 = {x: 0, y:0 , w:0, h:0};
        rec4 = {x: 0, y:0 , w:0, h:0};
        if(random(0,100) > 50){
          rec.x = windowWidth / 2;
        }
        if(random(0,100) > 50){
          rec.y = windowHeight / 2;
        }
      }else if(ran < 200){
        //half
        rec = {x: 0, y:0 , w:windowWidth/2, h:windowHeight/2};
        rec2 = {x: 0, y:0 , w:0, h:0};
        rec3 = {x: 0, y:0 , w:0, h:0};
        rec4 = {x: 0, y:0 , w:0, h:0};
        if(random(0,100) > 50){
          rec.w = windowWidth;
          if(random(0,100) > 50){
            rec.y = windowHeight/2;
          }
        }else{
          rec.h = windowHeight;
          if(random(0,100) > 50){
            rec.x = windowWidth/2;
          }
        }
      }else if(ran < 300){
        //4
        rec = {x: 0, y:0 , w:windowWidth/2, h:windowHeight/2};
        rec2 = {x: windowWidth/2, y:0 , w:windowWidth/2, h:windowHeight/2};
        rec3 = {x: 0, y:windowHeight/2 , w:windowWidth/2, h:windowHeight/2};
        rec4 = {x: windowWidth/2, y:windowHeight/2 , w:windowWidth/2, h:windowHeight/2};
        
      }else if(ran < 400){
        //checker
        rec = {x: 0, y:0 , w:windowWidth/2, h:windowHeight/2};
        rec2 = {x: 0, y:0 , w:windowWidth/2, h:windowHeight/2};
        rec3 = {x: 0, y:0 , w:0, h:0};
        rec4 = {x: 0, y:0 , w:0, h:0};
        if(random(0,100) > 50){
          rec.x = windowWidth/2;
          rec2.y = windowHeight/2;
          
        }else{
          rec2.x = windowWidth/2;
          rec2.y = windowHeight/2;
        }
      }else if(ran < 600){
        //2 one side
        rec = {x: 0, y:0 , w:windowWidth/2, h:windowHeight/2};
        rec2 = {x: 0, y:0 , w:windowWidth/2, h:windowHeight/2};
        rec3 = {x: 0, y:0 , w:0, h:0};
        rec4 = {x: 0, y:0 , w:0, h:0};
        let rr = random(0,400);
        if(rr > 300){
          
          rec2.y = windowHeight/2;
          
        }else if(rr > 200){
          rec2.x = windowWidth/2;
          
        }else if(rr > 100){
          
          rec2.y = windowHeight/2;
          rec.x = windowWidth/2;
          rec.y = windowHeight/2;
        }else {
          rec2.x = windowWidth/2;
          rec.x = windowWidth/2;
          rec.y = windowHeight/2;
        }
      }else if(ran < 700){
        //one centered
        rec = {x: windowWidth/4, y:windowHeight/4 , w:windowWidth/2, h:windowHeight/2};
        rec2 = {x: 0, y:0 , w:0, h:0};
        rec3 = {x: 0, y:0 , w:0, h:0};
        rec4 = {x: 0, y:0 , w:0, h:0};
      }else {
        //blank
        rec = {x: 0, y:0 , w:0, h:0};
        rec2 = {x: 0, y:0 , w:0, h:0};
        rec3 = {x: 0, y:0 , w:0, h:0};
        rec4 = {x: 0, y:0 , w:0, h:0};
      }
    //isOn = !isOn;
    print(rec)
    }
    

  
}

