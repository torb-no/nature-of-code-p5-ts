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
        // Set acceleration based on perlin noise
        let accMult = 3;
        this.acceleration.x = this.p.map(this.p.noise(this.xOffset), 0, 1, -accMult, accMult);
        this.acceleration.y = this.p.map(this.p.noise(this.yOffset), 0, 1, -accMult, accMult);

        // Calculate motion
        this.velocity.add(this.acceleration);
        this.velocity.limit(3);
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
        this.p.ellipse(this.position.x, this.position.y, 40, 40);
    }
}