class Walker {
	curr: p5.Vector;
	prev: p5.Vector;

	constructor() {
		this.curr = new p5.Vector(250, 250);
		this.prev = this.curr.copy();
	}

	step() {
		this.prev = this.curr.copy();

		let randVec = p5.Vector.random2D();
		let len = p.randomGaussian(0, 1) * 7;
		randVec.setMag(len);

		this.curr.add(randVec);
	}

	display() {
		p.stroke(255, 255, 255);
		p.line(this.prev.x, this.prev.y, this.curr.x, this.curr.y);
	}
}