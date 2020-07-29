let Grid = [];          //Store individual box's (x,y)
var Box = {
  size: 40,
  x: 0,
  y: 0
};
var Pressed_no = 0; 
var Relative_origin = 0;
var Tone = {
  H: 0,
  S: 50,
  B: 80,
  offset: 34
};

function setup() {
  createCanvas(400, 400);
  colorMode(HSB);

  Evaluate();
}

function draw() {
  background(255);
  //noStroke();
  translate(Relative_origin, 0);    //Needed to move boxes
  
  Display();
}

function mousePressed() {
  Pressed_no++;    //keep track of mouse press
  
  //to change grid color
  if (Tone.H > 360) {
    Tone.H = Tone.offset;
  } else {
    Tone.H += Tone.offset;
  }
  
  //to alternate the grid 
  if (Pressed_no % 2 == 1) {
    Relative_origin = -Box.size;
  } else {
    Relative_origin = 0;
  }
}

function Evaluate(){
  //Calculates box coordinates and save it to Grid[]
  //Evaluates 2 columns together
  for (i = -2, k = 0; i <= width / Box.size; i += 2) {
    for (j = 0; j < height / Box.size; j++, k++) {
      Box.y = Box.size * j;
      
      if (j % 2 == 0) {
        Box.x = Box.size * i;      //column i, row j (j is even)
      } else {
        Box.x = Box.size * (i + 1);  //column i + 1, row j (j is odd)
      }
      
      Grid[k] = createVector(Box.x, Box.y);
    }
  }
}

function Display(){
  //Draws the Checkered Grid 
  fill(Tone.H, Tone.S, Tone.B);
  for (i = 0; i < Grid.length; i++) {
    rect(Grid[i].x, Grid[i].y, Box.size, Box.size);
  }
}