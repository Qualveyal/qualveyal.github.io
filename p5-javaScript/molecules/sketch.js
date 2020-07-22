let Molecules = [];
let Grid = [];
let num = 100;

function setup() {
  createCanvas(400, 400);

  for (i = 0; i < num; i++) {
    Molecules[i] = new Molecule(10, width, height, 3);
  }
}

function draw() {
  background(0);
  view(1);

  for (i = 0; i < Molecules.length; i++) {
    Molecules[i].edge();

    for (j = i + 1; j < Molecules.length; j++) {
      Molecules[i].collision(Molecules[j]);
    }
    Molecules[i].move();
    Molecules[i].display();

    //to change color of specific molecule
    // if (i != 0) {
    //   Molecules[i].move();
    //   Molecules[i].display();
    // }
    // else {
    //   Molecules[0].move();
    //   Molecules[0].display();
    // }
  }
}

function view(scl = 1) {
  translate((width - width * scl) / 2, (height - height * scl) / 2);
  scale(scl);

  noFill();
  stroke(255);
  rect(0, 0, width, height);
}
