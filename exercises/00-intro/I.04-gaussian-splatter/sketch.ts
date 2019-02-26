import p5 from "p5";

new p5( (p :p5) => {

	p.setup = () => {
		p.createCanvas(500, 500);

		p.background(0);
		p.noStroke();
		p.colorMode(p.HSB, 100);
	};

	p.draw = () => {
		const basis = p.randomGaussian(0, 20);

		const hue = basis + 50;
		const saturation = basis + 45;
		const alpha = basis * 1.5 + 10;
		p.fill(hue, saturation, 150, alpha);

		const diameter = 50 - basis * 2.5;

		const x = p.randomGaussian(p.width/2, 50);
		const y = p.randomGaussian(p.height/2, 50);

		p.ellipse(x, y, diameter);
	}

} );




