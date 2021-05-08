const { listenerCount } = require("node:events");
const { arch } = require("node:os");
const { rootCertificates } = require("node:tls");

var hr 
var mn 
var sc 



function setup() {
  createCanvas(800,400);
  angleMode(DEGREES);
}

function draw() {
  background(255,255,255);  
  
  translate(200,200);
  rotate(360);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

push();
  rotate(scAngle)
  stroke(250,0,0);
  strokeWeight(7);
  line(0,0,100,0);
pop();

push();
  rotate(mnAngle)
  stroke(175,0,0);
  strokeWeight(7);
  line(0,0,100,0);
pop();

push();
  rotate(hrAngle)
  stroke(100,0,0);
  strokeWeight(7);
  line(0,0,100,0);
pop();

stroke(250,0,0);
arc(0,0,300,300,0,scAngle)

stroke(100,0,0);
arc(0,0,200,200,0,hrAngle)

stroke(175,0,0);
arc(0,0,250,250,0,mnAngle)

  drawSprites();
}