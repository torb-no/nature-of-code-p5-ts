import * as p5 from 'p5';

export class Walker {
	p: p5
	x: number;
	y: number;

	constructor(p: p5) {
		this.p = p;
		this.x = 250;
		this.y = 250;
	}

	step() {
		this.x += this.p.random(-1, 1.06);
		this.y += this.p.random(-1, 1.06);
	}

	display() {
		this.p.stroke(255, 255, 255, 100);
		this.p.point(this.x, this.y);
	}
}