const sketch = (p :p5) => {

	p.setup = () => {
		p.createCanvas(500, 500);
	};

	p.draw = () => {
		p.clear();
		p.ellipse(p.mouseX, p.mouseY, 20);
	}

}

new p5(sketch);