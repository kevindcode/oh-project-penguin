// https://medium.com/front-end-weekly/learning-the-p5-canvas-drawing-library-in-es6-and-webpack-bf514a679544

export default class SpaceObject {
  constructor(target, radius, p5) {
    this.p5 = p5;
    this.position = this.p5.createVector(window.innerWidth - 200, window.innerHeight / 2);
    this.radius = radius;
    this.speed = this.p5.createVector(0, 0);
    this.maxSpeed = 5;
    this.target = target;
  }

  display() {
    // let { x, y } = this.position;
    this.p5.fill(255);
    this.p5.ellipse(this.position.x, this.position.y, this.radius);
  }

  update(p5) {
    // this.position.x--;
    let direction = p5.Vector.sub(this.target.vector, this.position);

    let magnitude = direction.mag();

    direction.normalize();
    if (magnitude < 10) {
      const scaler = this.p5.map(magnitude, 0, 10, 0, this.maxSpeed);
      direction.mult(scaler);
    } else {
      direction.mult(this.maxSpeed);
    }
    const acceleration = direction.sub(this.speed);
    this.speed.add(acceleration);
    this.speed.limit(this.maxSpeed);
    this.position.add(this.speed);
  }
}
