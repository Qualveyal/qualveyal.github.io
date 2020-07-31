let Grid = [];          //Store individual box's (x,y)
var Box = {
  size: 40,
  x: 0,
  y: 0
};
var Tone = {
  H: 0,
  S: 50,
  B: 75,
  offset: 34
};
var Pressed_no = 0; 
var Relative_origin = 0;

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  Evaluate();
}

function draw() {
  background(255);
  noFill();

  rect(-Relative_origin, 0, width, height);  
  Display();
}

function mouseClicked() {
  Alternate();
  Color();
}

