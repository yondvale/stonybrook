
var totalPts = 300;
var steps = totalPts + 1;
  
function setup() {
 createCanvas(windowWidth, windowHeight);
 strokeWeight(4);
  stroke('orange');
  frameRate(10);
} 

function draw() {
  background(0);
  var rand = 0;
  for  (var i = 1; i < steps; i++) {
    point( (width/steps) * i, (height/2) + random(-rand, rand) );
    rand += random(-5, 5);
  }
}
