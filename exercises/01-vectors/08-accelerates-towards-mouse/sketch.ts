import p5 from "p5";
import { Mover } from "./Mover";

new p5( (p :p5) => {

	let m: Mover;

	p.setup = () => {
		p.createCanvas(500, 500);
		m = new Mover(p, p.width/2, p.height/2);
		p.background(0);
	};

	p.draw = () => {
		m.update();

		let alphaDark = p.color(0, 4);
		p.fill(alphaDark);
		p.rect(0, 0, p.width, p.height);

		// p.background(0, 150);
		// p.background(alphaDark);
		

		m.draw();
	}

});