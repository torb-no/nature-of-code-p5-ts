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
        // Set acceleration based on relative mouse position
        let mousePos = new p5.Vector(p.mouseX, p.mouseY);
        let direction = p5.Vector.sub(mousePos, this.position);
        direction.normalize();
        direction.mult(0.5);
        this.acceleration = direction;



        // Calculate motion
        this.velocity.add(this.acceleration);
        this.velocity.limit(6);
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
        p.ellipse(this.position.x, this.position.y, 20, 20);
    }
}