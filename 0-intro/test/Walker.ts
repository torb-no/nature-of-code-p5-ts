class Walker {
	x: number;
	y: number;

	constructor() {
		this.x = 250;
		this.y = 250;
	}

	step() {
		this.x += p.random(-1, 1.06);
		this.y += p.random(-1, 1.06);
	}

	display() {
		p.fill(255, 255, 255);
		p.point(this.x, this.y);
	}
}