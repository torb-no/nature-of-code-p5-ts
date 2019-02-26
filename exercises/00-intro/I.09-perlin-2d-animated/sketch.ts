import p5 from "p5";

let zOff = 0.0;

const p = new p5( (p :p5) => {

	
	let pixelWidth: number;
	let pixelHeight: number;

	p.setup = () => {
		p.createCanvas(500, 500);
		p.colorMode(p.HSB);

		p.frameRate(120);

		pixelWidth = p.width * p.displayDensity();
		pixelHeight = p.height * p.displayDensity();
	};

	p.draw = () => {
		
		p.loadPixels();
		for (let x=0; x < pixelWidth; x++) {
			for (let y=0; y < pixelHeight; y++) {
				const hueSat = p.map( p.noise(x * 0.0026, 0, zOff), 0, 1, 0, 100);
				const lum = p.map( p.noise(x * 0.0013, y * 0.0006, zOff), 0, 1, -30, 130);
				const c = p.color(hueSat, hueSat, lum);
				p.set(x, y, c);
			}
		}
		p.updatePixels();

		zOff += 0.01;
	}

});