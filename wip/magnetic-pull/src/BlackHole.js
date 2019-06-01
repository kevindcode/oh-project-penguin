export default class BlackHole {
  constructor(r, p5) {
    this.p5 = p5;
    this.vector = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
    this.r = r;
  }

  display() {
    this.vector = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);
    const { x, y } = this.vector;
    this.p5.fill('#BDD9BF');
    this.p5.ellipse(x, y, this.r);
  }
}
