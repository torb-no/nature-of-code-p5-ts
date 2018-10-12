class Mover {
    position: p5.Vector;
    velocity: p5.Vector;
    acceleration: p5.Vector;

    xOffset: number;
    yOffset: number;

    constructor(xPos: number, yPos: number) {
        this.position = new p5.Vector(xPos, yPos);
        this.velocity = new p5.Vector(0, 0);
        this.acceleration = new p5.Vector(0, 0);

        this.xOffset = 0;
        this.yOffset = 10000;
    }

    update()  {
        // Set acceleration based on perlin noise
        let accMult = 3;
        this.acceleration.x = p.map(p.noise(this.xOffset), 0, 1, -accMult, accMult);
        this.acceleration.y = p.map(p.noise(this.yOffset), 0, 1, -accMult, accMult);

        // Calculate motion
        this.velocity.add(this.acceleration);
        this.velocity.limit(3);
        this.position.add(this.velocity);


        // Edges
        if (this.position.x > p.width) this.position.x = 0;
        else if (this.position.x < 0) this.position.x = p.width;
        if (this.position.y > p.height) this.position.y = 0;
        else if (this.position.y < 0) this.position.y = p.height; 

        // Move along in perlin noise space
        this.xOffset += 0.01;
        this.yOffset += 0.01;
    }

    draw() {
        p.noStroke();
        p.fill(255, 255, 255);
        p.ellipse(this.position.x, this.position.y, 40, 40);
    }
}