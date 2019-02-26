import p5 from "p5";

export class RightMover {
    p: p5;
    location: p5.Vector;
    velocity: p5.Vector;
    acceleration: p5.Vector;

    constructor(p: p5) {
        this.p = p;
        this.location = p.createVector(100, 250);
        this.velocity = p.createVector(0, 0);
        this.acceleration = p.createVector(0, 0);
    }

    update() {
        // Forward, s == 83
        this.acceleration.x = this.p.keyIsDown(83) ? 0.1 : 0;
        // Brake, a == 65
        const frictionMag = this.p.keyIsDown(65) ? 0.25 : 0.01;

        const friction = this.velocity.copy().normalize().mult(-frictionMag);
        this.velocity.add(friction);
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);

        if (this.p.width < this.location.x) this.location.x = 1;
        else if (this.location.x < 0) this.location.x = this.p.width-1;
    }

    draw() {
        this.p.background(0);
        this.p.fill(255,255,255);
        this.p.ellipse(this.location.x, this.location.y, 15);
    }
}