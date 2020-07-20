let Grid;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
  
  Grid = new grid();
  
  Grid.Evaluate();
}

function draw() {
  background(255);
  
  Grid.Display();
}

function mousePressed() {
  Grid.Alternate();
  Grid.Color();
}