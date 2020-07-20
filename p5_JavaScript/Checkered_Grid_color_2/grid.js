
class grid {

    constructor() {
      this.Grid = [];
      this.index = 0;
      
      this.size = 40;
      this.x = 0;
      this.y = 0;
      
      this.H = 0;
      this.S = 50;
      this.B = 75;
      this.offset = 34;
      
      this.Pressed_num = 0;
      this.Relative_origin = 0;
    }
  
    Evaluate() {
      //Calculates box coordinates and save it to Grid[]
      //Evaluates 2 columns together
      for (let i = -2; i <= width / this.size; i += 2) {
        for (let j = 0; j < height / this.size; j++) {
          this.y = this.size * j;
  
          if (j % 2 == 0) {
            this.x = this.size * i; //column i, row j (j is even)
          } else {
            this.x = this.size * (i + 1); //column i + 1, row j (j is odd)
          }
  
          this.Grid[this.index] = createVector(this.x, this.y);
          this.index++;
        }
      }
    }
  
    Display() {
      //noStroke();
      translate(this.Relative_origin, 0); //Needed to move boxes
      
      //Draws the Checkered Grid 
      fill(this.H, this.S, this.B);
      for (let i = 0; i < this.Grid.length; i++) {
        rect(this.Grid[i].x, this.Grid[i].y, this.size, this.size);
      }
    }
  
    Alternate() {
      this.Pressed_num++;
      
      if (this.Pressed_num % 2 == 1) {
        this.Relative_origin = -this.size;
      } else {
        this.Relative_origin = 0;
      }
    }
  
    Color() {
      //to change grid color
      if (this.H > 360) {
        this.H = this.offset;
      } else {
        this.H += this.offset;
      }
    }
  }