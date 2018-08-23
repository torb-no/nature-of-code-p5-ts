class Walker {
	center: p5.Vector;
	curr: p5.Vector;
	prev: p5.Vector;

	constructor() {
		this.center = new p5.Vector(250, 250);
		this.curr = new p5.Vector(250, 250);
		this.prev = this.curr.copy();
	}

	step() {
		this.prev = this.curr.copy();

		// Make steps depend on distance from center
		const stepsize = this.center.dist(this.curr) / 3 + 2;

		this.curr.x += p.random(-stepsize, stepsize);
		this.curr.y += p.random(-stepsize, stepsize);
	}

	display() {
		p.stroke(255, 255, 255, 170);
		p.line(this.prev.x, this.prev.y, this.curr.x, this.curr.y);
	}
}