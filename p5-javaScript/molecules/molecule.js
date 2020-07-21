class Molecule {

    constructor(r, w, h, s) {
        this.r = r;

        this.FOrigin = 0 + this.r;
        this.FWidth = w - this.r;
        this.FHeight = h - this.r;
        
        this.x = random(this.FOrigin, this.FWidth);
        this.y = random(this.FOrigin, this.FHeight);

        this.x_speed = random(-s, s);
        this.y_speed = random(-s, s);
    }

    display(red = 255, green = 255, blue = 255, alpha = 175) {
        noStroke();
        fill(red, green, blue, alpha);
        ellipse(this.x, this.y, 2 * this.r);
    }

    move() {
        this.x += this.x_speed;
        this.y += this.y_speed;
    }

    edge() {
        if(this.x > this.FWidth || this.x < this.FOrigin) {
            this.x_speed = -this.x_speed;
        }
        if(this.y > this.FHeight || this.y < this.FOrigin) {
            this.y_speed = -this.y_speed;
        }
    }

    collision(other) {
        let TX = 0; 
        let TY = 0;
        let d = dist(this.x, this.y, other.x, other.y);

        TX = Molecules[i].x_speed;
        TY = Molecules[i].y_speed;

        if(d <= this.r + other.r){
            Molecules[i].x_speed = other.x_speed;
            Molecules[i].y_speed = other.y_speed;

            other.x_speed = TX;
            other.y_speed = TY;
        }
    }
}