import p5 from "p5";
import { RightMover } from "./RightMover";

const p = new p5( (p :p5) => {

	let rm: RightMover;

	p.setup = () => {
		p.createCanvas(500, 500);
		rm  = new RightMover(p);
	};

	p.draw = () => {
		rm.update();
		rm.draw();
	}

});