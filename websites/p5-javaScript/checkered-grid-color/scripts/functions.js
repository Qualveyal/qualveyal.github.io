function Evaluate(){
  //Calculates box coordinates and save it to Grid[]
  //Evaluates 2 columns together
  for (let i = -2, k = 0; i <= width / Box.size; i += 2) {
    for (let j = 0; j < height / Box.size; j++, k++) {
      Box.y = Box.size * j;
      if (j % 2 == 0) {
        Box.x = Box.size * i;        //column i, row j (j is even)
      } else {
        Box.x = Box.size * (i + 1);  //column i + 1, row j (j is odd)
      }
      Grid[k] = createVector(Box.x, Box.y);
    }
  }
}

function Display(){
  //noStroke();
  translate(Relative_origin, 0);    //Needed to move boxes

  //Draws the Checkered Grid 
  fill(Tone.H, Tone.S, Tone.B);
  for (let i = 0; i < Grid.length; i++) {
    rect(Grid[i].x, Grid[i].y, Box.size, Box.size);
  }
}

function Alternate() {
  Pressed_no++;    //keep track of mouse press

  //to alternate the grid 
  if (Pressed_no % 2 == 1) {
    Relative_origin = -Box.size;
  } else {
    Relative_origin = 0;
  }
}

function Color() {
  //to change grid color
  if (Tone.H > 360) {
    Tone.H = Tone.offset;
  } else {
    Tone.H += Tone.offset;
  }
}