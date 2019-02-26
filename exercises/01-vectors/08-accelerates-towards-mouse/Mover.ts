import p5 from "p5";

export class Mover {
    p: p5;
    position: p5.Vector;
    velocity: p5.Vector;
    acceleration: p5.Vector;

    xOffset: number;
    yOffset: number;

    constructor(p: p5, xPos: number, yPos: number) {
        this.p = p;
        this.position = this.p.createVector(xPos, yPos);
        this.velocity = this.p.createVector(0, 0);
        this.acceleration = this.p.createVector(0, 0);

        this.xOffset = 0;
        this.yOffset = 10000;
    }

    update()  {
        // Set acceleration based on relative mouse position
        let mousePos = this.p.createVector(this.p.mouseX, this.p.mouseY);
        let direction = p5.Vector.sub(mousePos, this.position);
        direction.normalize();
        direction.mult(0.5);
        this.acceleration = direction;

        // Calculate motion
        this.velocity.add(this.acceleration);
        this.velocity.limit(6);
        this.position.add(this.velocity);

        // Edges
        if (this.position.x > this.p.width) this.position.x = 0;
        else if (this.position.x < 0) this.position.x = this.p.width;
        if (this.position.y > this.p.height) this.position.y = 0;
        else if (this.position.y < 0) this.position.y = this.p.height; 

        // Move along in perlin noise space
        this.xOffset += 0.01;
        this.yOffset += 0.01;
    }

    draw() {
        this.p.noStroke();
        this.p.fill(255, 255, 255);
        this.p.ellipse(this.position.x, this.position.y, 20, 20);
    }
}