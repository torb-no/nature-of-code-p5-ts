

class RightMover {
    location: p5.Vector;
    velocity: p5.Vector;
    acceleration: p5.Vector;

    constructor() {
        this.location = new p5.Vector(100, 250);
        this.velocity = new p5.Vector(0, 0);
        this.acceleration = new p5.Vector(0, 0);
    }

    update() {
        // Forward, s == 83
        this.acceleration.x = p.keyIsDown(83) ? 0.1 : 0;
        // Brake, a == 65
        const frictionMag = p.keyIsDown(65) ? 0.25 : 0.01;

        const friction = this.velocity.copy().normalize().mult(-frictionMag);
        this.velocity.add(friction);
        this.velocity.add(this.acceleration);
        this.location.add(this.velocity);

        if (p.width < this.location.x) this.location.x = 1;
        else if (this.location.x < 0) this.location.x = p.width-1;
    }

    draw() {
        p.background(0);
        p.fill(255,255,255);
        p.ellipse(this.location.x, this.location.y, 15);
    }
}