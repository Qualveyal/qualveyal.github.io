let Grid;

function setup() {
  createCanvas(800, 800);
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