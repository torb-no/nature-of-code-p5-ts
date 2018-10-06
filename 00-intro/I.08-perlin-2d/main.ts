const p = new p5( (p :p5) => {

	p.setup = () => {
		p.createCanvas(500, 500);
		p.colorMode(p.HSB);

		const pixelWidth = p.width * p.displayDensity();
		const pixelHeight = p.height * p.displayDensity();

		p.loadPixels();
		for (let x=0; x < pixelWidth; x++) {
			for (let y=0; y < pixelHeight; y++) {
				const hueSat = p.map( p.noise(x * 0.0026, 0), 2, 1, 0, 255);
				const lum = p.map( p.noise(x * 0.01, y * 0.0006 + 0.2), 0, 1, -142, 275);
				const c = p.color(hueSat * 1.2, hueSat * 0.5, lum);
				p.set(x, y, c);
			}
		}
		p.updatePixels();
	};


});