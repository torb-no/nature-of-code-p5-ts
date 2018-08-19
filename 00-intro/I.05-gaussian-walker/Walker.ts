class Walker {
	curr: p5.Vector;
	prev: p5.Vector;
	rand: p5.Vector;

	constructor() {
		this.curr = new p5.Vector(p.width/2, p.height/2);
		this.prev = this.curr.copy();
		this.rand = new p5.Vector();
	}

	step() {
		this.prev.set(this.curr);

		this.rand = p5.Vector.random2D();
		const len = p.randomGaussian(0, 7);
		this.rand.setMag(len);

		this.curr.add(this.rand);
	}

	display() {
		p.stroke(255, 255, 255, 150);
		p.line(this.prev.x, this.prev.y, this.curr.x, this.curr.y);
	}
}