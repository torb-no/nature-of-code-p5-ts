import p5 from "p5";

export class Walker {
	p: p5;
	curr: p5.Vector;
	prev: p5.Vector;
	rand: p5.Vector;

	constructor(p: p5) {
		this.p = p;
		this.curr = p.createVector(p.width/2, p.height/2);
		
		this.prev = this.curr.copy();
		this.rand = p.createVector();		
	}

	step() {
		this.prev.set(this.curr);

		this.rand = p5.Vector.random2D();
		const len = this.p.randomGaussian(0, 7);
		this.rand.setMag(len);

		this.curr.add(this.rand);
	}

	display() {
		this.p.stroke(255, 255, 255, 150);
		this.p.line(this.prev.x, this.prev.y, this.curr.x, this.curr.y);
	}
}