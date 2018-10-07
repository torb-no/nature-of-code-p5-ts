const p = new p5( (p :p5) => {

	let rm: RightMover;

	p.setup = () => {
		p.createCanvas(500, 500);
		rm  = new RightMover();
	};

	p.draw = () => {
		rm.update();
		rm.draw();
	}


});