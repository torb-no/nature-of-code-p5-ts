const sketch = (p :p5) => {

	let w: Walker;

	p.setup = () => {
		p.createCanvas(500, 500);
		p.frameRate(120);
		w = new Walker();
		p.background(0);
	};

	p.draw = () => {
		w.step();
		w.display();
	}

}

let p = new p5(sketch);