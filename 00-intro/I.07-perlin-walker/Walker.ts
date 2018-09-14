class Walker {
	curr: p5.Vector;
	prev: p5.Vector;
	off: p5.Vector;

	constructor() {
		this.curr = new p5.Vector(250, 250);
		this.prev = this.curr.copy();
		this.off = new p5.Vector(p.random(0, 1000), p.random(0, 1000));
	}

	step() {
		this.prev = this.curr.copy();

		this.curr.x += p.map(p.noise(this.off.x), 0, 1, -1, 1);
		this.curr.y += p.map(p.noise(this.off.y), 0, 1, -1, 1);

		this.off.add(0.01, 0.01);
	}

	display() {
		p.stroke(255, 255, 255, 170);
		p.line(this.prev.x, this.prev.y, this.curr.x, this.curr.y);
	}
}