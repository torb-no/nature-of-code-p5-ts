class Walker {
	pos: p5.Vector;

	constructor() {
		this.pos = new p5.Vector(250, 250);
	}

	step() {
		// If walker is too close the mouse tend towards
		// the oposite direction
		if (p.dist(this.pos.x, this.pos.y, p.mouseX, p.mouseY) < 100) {
			if (this.pos.x < p.mouseX) this.pos.x += p.random(-2, 1);
			else this.pos.x += p.random(-1, 2);

			if (this.pos.y < p.mouseY) this.pos.y += p.random(-2, 1);
			else this.pos.y += p.random(-1, 2);
		}
		else {
			this.pos.x += p.random(-1, 1);
			this.pos.y += p.random(-1, 1);
		}
	}

	display() {
		p.fill(255, 255, 255, 150);
		p.point(this.pos.x, this.pos.y);
	}
}