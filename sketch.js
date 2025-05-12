var thundadun=0
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(173,mouseX,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(thundadun,250,thundadun,20); // center of canvas, 20px dia
  ;
  fill(153,204,255);
  rect(random(width),random(height),100,50);
line (55,thundadun,400,400);
textSize(40);
textFont("Verdana");
text('i am human.',random(100,400),random(175,300));
textSize(25);
textFont("Arial");
text('hai!',250,200);
textSize(20);
textFont("Garamound");
text('can you see me?',100,290);
textSize(15);
textFont("Times New Roman");
text('can you hear me?',150,350)
textSize(30);
textFont("Calabri");
text('i can see you!',200,400);
}
function mousePressed(){
  if (thundadun>=300) {thundadun=0;} else {thundadun=thundadun+15;}
}