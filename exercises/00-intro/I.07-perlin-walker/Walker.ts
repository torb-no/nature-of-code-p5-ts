import p5 from "p5";

export class Walker {
	p: p5;
	curr: p5.Vector;
	prev: p5.Vector;
	off: p5.Vector;

	constructor(p: p5) {
		this.p = p;
		this.curr = p.createVector(250, 250);
		this.prev = this.curr.copy();
		this.off = p.createVector(p.random(0, 1000), p.random(0, 1000));
	}

	step() {
		this.prev = this.curr.copy();

		this.curr.x += this.p.map(this.p.noise(this.off.x), 0, 1, -1, 1);
		this.curr.y += this.p.map(this.p.noise(this.off.y), 0, 1, -1, 1);

		this.off.add(0.01, 0.01);
	}

	display() {
		this.p.stroke(255, 255, 255, 170);
		this.p.line(this.prev.x, this.prev.y, this.curr.x, this.curr.y);
	}
}