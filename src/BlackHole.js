class BlackHole {
  constructor(posX, posY, radius, radiusOffset) {
    this.radius = radius;
    this.radiusOffset = radiusOffset;
    this.radiusMaxRange = this.radius + this.radiusOffset;
    this.radiusMinRange = this.radius - this.radiusOffset;
    this.flipPulse = true;
    this.vector = createVector(posX, posY);
    this.orbit = {
      posX: this.radius + this.radiusOffset,
      posY: this.radius + this.radiusOffset,
      angle: 0,
      radiusFromBlackHole: 120,
      radius: 30
    };
  }

  display() {
    fill('#BDD9BF');
    ellipse(this.vector.x, this.vector.y, this.radius);
  }

  update() {
    this.pulseAnimation();
    this.orbitAnimation();
  }

  pulseAnimation() {
    if (this.radius > this.radiusMaxRange) {
      this.flipPulse = !this.flipPulse;
    } else if (this.radius < this.radiusMinRange) {
      this.flipPulse = !this.flipPulse;
    }
    let increment = this.flipPulse ? 0.2 : -0.2;
    this.radius += increment;
  }

  orbitAnimation() {
    translate(this.vector.x, this.vector.y);
    this.orbit.posX = this.orbit.radiusFromBlackHole * Math.cos(this.orbit.angle);
    this.orbit.posY = this.orbit.radiusFromBlackHole * Math.sin(this.orbit.angle);
    fill(76, 219, 200, 100);
    ellipse(this.orbit.posX, this.orbit.posY, this.orbit.radius);
    this.orbit.angle += 0.01;
    resetMatrix();
  }

}

export default BlackHole;