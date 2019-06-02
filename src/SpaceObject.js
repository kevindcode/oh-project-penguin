import { Vector } from 'p5';

class SpaceObject {
  constructor(radius) {
    this.radius = radius;
    this.position = createVector(windowWidth - 200, windowHeight / 2);
    this.speed = createVector(0, 0);
    this.maxSpeed = 5;
  }

  display() {
    const { x, y } = this.position;
    fill(255);
    ellipse(x, y, this.radius);
  }

  moveToTarget(target) {
    let direction = Vector.sub(target.vector, this.position);
    const magnitude = direction.mag();
    direction.normalize();

    if (magnitude < 10) {
      const scaler = map(magnitude, 0, 10, 0, this.maxSpeed);
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

export default SpaceObject;
