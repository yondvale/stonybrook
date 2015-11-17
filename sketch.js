var totalPts = 300;
var steps = totalPts + 1;
var slider;
  
function setup() {
 createCanvas(windowWidth, windowHeight);
 strokeWeight(4);
 //colorMode(HSB, 255);
// slider = createSlider(0, 255, 127);
// slider = createSlider(0, 255, 100);
// slider.position(10,10);
// slider.style('width', '80px');
  stroke('orange');
  frameRate(10);
} 

function draw() {
//    var val = slider.value();
  background(0);
  stroke('orange');
  var rand = 0;
  for  (var i = 1; i < steps; i++) {
    point( (width/steps) * i, (height/2) + random(-rand, rand) );
    rand += random(-5, 5);
  }
}
