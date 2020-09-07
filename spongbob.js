/**Youming Zhang
ICM homework 1 
**/


var background1={r:255,g:255,b:0,alpha:100}

function setup() {
  createCanvas(600,550);
}

function draw() {
  background(255,255,255);
  
  //drawing background
  drawbackground()
  //draw curved rect
  drawBodyShape()
  //draw eyes
  drawEye();
  //draw nose
  drawNose();
  //draw cheek
  drawCheek();
  //drawMouse
  drawMouth();
  //draw holes
  drawHoles();
  //draw body
  drawBody();
  //drawShirt
  drawShirt();
  

}

function drawTshirt(inputval,xl,xr){
    var y =0;
    var count = 1;
    var x=xl;

    for (let i=PI;i<20*PI;i+=PI){
      y=inputval;
      if(count % 2 == 0){
        y += 12;
      }
      x += 0.2*sin(i)+30;
      //delete point at edge
      if (x>xr){
        break;
      }
      curveVertex(x,y);
      count +=1;

  }
}

function drawShirt(){
  var p1 ={x:90,y:483};
  var p2 ={x:484,y:493};
  var p3 ={x:91,y:536};

  //lower body with wave shape
  noStroke();
  beginShape();
  vertex(p1.x,p1.y)
  drawTshirt(483,59,490);
  vertex(483,512);
  vertex(483,536);
  vertex(483,537);
  vertex(483,538);
  vertex(483,height);
  vertex(459,height);
  vertex(90,height);
  vertex(p1.x,height);
  //vertex(p1.x,height);
  endShape();
  
  //shirt outline
  stroke(0);
  line(p1.x,p1.y,p1.x,height);
  line(p2.x,p2.y,p2.x,height);
  line(p3.x,p3.y-2,484,p3.y-2);
  
  //color lower shirt
  fill(165,42,42)
  noStroke();
  rect(p3.x+1,p3.y,484-p3.x-3,height-p3.y);
  //draw tie
  fill(245,0,0);
  noStroke();
  //ellipse(275,490,30,60);
  stroke(0);
  arc(275,490,30,60,0,9*PI/8,OPEN);
  stroke(245,0,0);
  strokeWeight(3);
  line(285,488,264,484);
  line(268,482,278,485);
  stroke(0);
  beginShape();
  vertex(269+3,519);
  vertex(256+3,550);
  vertex(288+3,550);
  vertex(278+3,519);
  endShape();
  strokeWeight(5);
  line(271,520,278,520);
  strokeWeight(3);
  
  line(260,486,237,520);
  line(237,520,173,491);
  line(292,493,317,520);
  line(317,520,365,491);
  
  
}

function drawBody(){
  fill(255);
  stroke(0);
  arc(60,420,80,100,7*PI/8,-PI/2,OPEN);
  arc(41,426,60,30,3*PI/16,13*PI/16,OPEN);
  stroke(255);
  strokeWeight(6);
  //color fill
  line(57,375,26,433);
  line(57,385,26,433);
  line(53,407,26,433);
  line(57,396,26,433);
  line(52,417,26,433);
  line(53,426,26,433);
  line(54,430,26,433);
  
  stroke(0);
  strokeWeight(3);
  line(32,440,36,549);
  line(48,442,50,549);
  
  //right arm
  fill(255);
  stroke(0);
  arc(60+445,420,80,100,-PI/2,PI/8,OPEN);
  arc(41+483,426,60,30,3*PI/16,14*PI/16,OPEN);
  stroke(255);
  strokeWeight(6);
  //color fill
  stroke(255);
  strokeWeight(6);
  line(507,376,538,434);
  line(509,391,538,434);
  line(513,405,538,434);
  line(512,411,538,434);
  line(512,417,538,434);
  line(510,422,538,434);
  line(508,431,538,434);
  
  stroke(0);
  strokeWeight(3);
  line(535,441,530,551);
  line(521,442,515,549);
}

function drawHoles(){

  //holes  
  fill(178, 179, 0,80);
  noStroke();
  ellipse(109,410,20,40);
  ellipse(148,428,40,30);
  ellipse(444,402,50,60);
  ellipse(456,142,30,20);
  ellipse(103,130,30,40);
  
  
}

function drawMouth(){
  strokeWeight(4);
  stroke(0);
  noFill();
  arc(130,298,30,10,PI+PI/16,0-PI/8,OPEN);
  arc(137+283,298,30,10,PI+PI/8,0-PI/16,OPEN);
  
  noFill();
  stroke(0);
  arc(273,233,320,320,PI/8,7*PI/8);
  
  //teeth
  fill(255,255,255);
  beginShape();
  vertex(238,393);
  vertex(238,430);
  vertex(267,430);
  vertex(267,395);
  endShape(CLOSE);
  fill(255,255,255);
  beginShape();
  vertex(238+50,393);
  vertex(238+50,430);
  vertex(267+50,430);
  vertex(267+50,390);
  endShape(CLOSE);
  
  //mouth bottom
  noFill();
  stroke(225,69,52);
  beginShape(); 
    var y =300;
    var count = 1;
    var x=80;

    for (let i=PI;i<20*PI;i+=PI/2){
      y=450;
      if(count % 2 == 0){
        y += 12;
      }
      x += 0.5*cos(i)+50;
      //delete point at edge
      if (x>460){
        continue;
      }
      curveVertex(x,y);
      count +=1;

    }
  endShape();
}

function drawCheek(){
  
  fill(255,255,0,100);
  noStroke();
  ellipse(136,280,90,60);
  fill(225,20,0,60);
  noStroke();
  ellipse(136,285,65,45);
  
  //decro points
  stroke(225,0,0);
  strokeWeight(5);
  point(113,270);
  point(138,275);
  point(153,265);
  
  
  strokeWeight(5);
  stroke(225,69,52);
  noFill();
  arc(136,280,90,60,3*PI/4,PI/16,OPEN);
  
 
  
  //right cheek
  fill(255,255,0,100);
  noStroke();
  ellipse(136+280,280,90,60);
  fill(225,20,0,60);
  noStroke();
  ellipse(136+280,285,65,45);
  strokeWeight(5);
  stroke(225,69,52);
  noFill();
  arc(136+280,280,90,60,PI,PI/4,OPEN);
  
  strokeWeight(5);
  stroke(225,69,52);
  noFill();
  point(436,269);
  point(413,275);
  point(396,266);
  


}

function drawNose(){
  fill(254,255,0,100);
  noStroke();
  ellipse(273,266,50,70);
  
  stroke(0);
  noFill();
  arc(273,270,50,70,PI,PI/4,OPEN);
  
}


function drawbackground(){
  fill(background1.r,background1.g,background1.b,background1.alpha);
  noStroke();
  rect(0,0,600,550,40);
  
}

/*spongebob body shape function*/

function drawBodyShape(){
  stroke(178, 179, 0);
  //fill(255, 255, 0);
  strokeWeight(3);
  var x=0;
  var y = 0;
  var rad = 0;
  var count=1;
  
  //top head points
  beginShape();
  drawHorizontal(55);
  endShape();
  
  beginShape();
  drawHorizontal(480);
  endShape();
  
  //button head points
  beginShape();
  drawVertical(60);
  endShape();
  
  beginShape();
  drawVertical(500);
  endShape();
  
  
}


function drawHorizontal(inputval){
    var y =0;
    var count = 1;
    var x=0;

    for (let i=PI;i<20*PI;i+=PI){
      y=inputval;
      if(count % 2 == 0){
        y += 12;
      }
      x += 0.2*sin(i)+30;
      //delete point at edge
      if (x>550){
        continue;
      }
      curveVertex(x,y);
      count +=1;

  }
}



function drawVertical(inputval){
    //button head points
  var x=0;
  var y=0;
  var count = 1;
  
  for (let i=PI;i<20*PI;i+=PI){
    x = inputval;
    if(count % 2 == 0){
      x += 8;
    }
    y += 0.2*sin(i)+29;
    //delete point at edge
    if (y>550){
      continue;
    }
    curveVertex(x,y);
    count +=1;

  }
}

function drawEye(){
  var x = 200,y = 220;
  var w = 150, h = 150;
  
  //inner eye
  fill(255,255,255);
  noStroke();
  circle(200,220,150);
  
  circle(350,220,150);
  
  //eye outline
  stroke(0);
  noFill();
  arc(x,y,w,h,7*PI/8,PI/16,OPEN);
  arc(x,y,w,h,9*PI/32,19*PI/32,OPEN);
  x=350;
  arc(x,y,w,h,15*PI/16,PI/8,OPEN);
  arc(x,y,w,h,3*PI/8,6*PI/8,OPEN);
  
  
  
  //eyebow
  strokeWeight(8);
  line(150,127,162,153);
  line(194,116,194,143);
  line(238,124,229,149);
  
  line(150+150,127,162+150,153);
  line(194+150,116,194+150,143);
  line(238+150,124,229+150,149);
  
  //left eye ball
  fill(77,210,255);
  stroke(0);
  strokeWeight(4);
  circle(222,222,60);
  fill(0)
  circle(222,222,25);
  
  fill(255,255,255);
  noStroke();
  circle(216,209,15);
  circle(228,234,5);
  
  //right eye ball
  fill(77,210,255);
  stroke(0);
  strokeWeight(4);
  circle(222+115,222,60);
  fill(0)
  circle(222+115,222,25);
  
  fill(255,255,255);
  noStroke();
  circle(348,209,15);
  circle(328,232,5);
}


function mousePressed(){
  console.log(mouseX,mouseY);
}
