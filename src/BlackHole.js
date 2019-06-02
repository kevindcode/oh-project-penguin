class BlackHole {
  constructor(radius) {
    this.radius = radius;
    this.vector = createVector(300, window.innerHeight / 2);
  }

  display() {
    const { x, y } = this.vector;
    fill('#BDD9BF');
    ellipse(x, y, this.radius);
  }
}

export default BlackHole;
