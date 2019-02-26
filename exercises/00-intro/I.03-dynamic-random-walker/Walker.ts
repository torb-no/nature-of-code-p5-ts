import p5 from "p5";

export class Walker {
	p: p5;
	pos: p5.Vector;

	constructor(p: p5) {
		this.p = p;
		this.pos = this.p.createVector(250, 250);
	}

	step() {
		// If walker is too close the mouse tend towards
		// the oposite direction
		if (this.p.dist(this.pos.x, this.pos.y, this.p.mouseX, this.p.mouseY) < 100) {
			if (this.pos.x < this.p.mouseX) this.pos.x += this.p.random(-2, 1);
			else this.pos.x += this.p.random(-1, 2);

			if (this.pos.y < this.p.mouseY) this.pos.y += this.p.random(-2, 1);
			else this.pos.y += this.p.random(-1, 2);
		}
		else {
			this.pos.x += this.p.random(-1, 1);
			this.pos.y += this.p.random(-1, 1);
		}
	}

	display() {
		this.p.stroke(255, 255, 255, 150);
		this.p.point(this.pos.x, this.pos.y);
	}
}