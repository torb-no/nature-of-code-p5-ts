import p5 from "p5";

export class Walker {
	p: p5;
	center: p5.Vector;
	curr: p5.Vector;
	prev: p5.Vector;

	constructor(p: p5) {
		this.p = p;
		this.center = p.createVector(250, 250);
		this.curr = p.createVector(250, 250);
		this.prev = this.curr.copy();
	}

	step() {
		this.prev = this.curr.copy();

		// Make steps depend on distance from center
		const stepsize = this.center.dist(this.curr) / 3 + 2;

		this.curr.x += this.p.random(-stepsize, stepsize);
		this.curr.y += this.p.random(-stepsize, stepsize);
	}

	display() {
		this.p.stroke(255, 255, 255, 170);
		this.p.line(this.prev.x, this.prev.y, this.curr.x, this.curr.y);
	}
}