"use strict";
class Walker {
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
const sketch = (p) => {
    let w;
    p.setup = () => {
        p.createCanvas(500, 500);
        p.frameRate(120);
        w = new Walker();
        p.background(0);
    };
    p.draw = () => {
        w.step();
        w.display();
    };
};
let p = new p5(sketch);
//# sourceMappingURL=build.js.map