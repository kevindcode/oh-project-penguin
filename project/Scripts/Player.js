// Player initialisation
class Player {
  constructor(posX, posY, width, height, colour) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.colour = colour;
    this.gravity;
    this.verticalVelocity = 2;
    this.verticalAcceleration = 1;
    this.addingGravity = "positive";
    this.grounded = false;
    this.onPlatform = false;
  }
  // display the red square player
  display(game_area) {
    let ctx = game_area;
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
  }
  // update the position based on gravity
  update() {
    if (this.addingGravity == "positive" && !this.grounded) {
      // console.log(`gravity should get set here (positive)`);
      this.gravity = this.verticalVelocity += this.verticalAcceleration;
      // console.log(`gravity (${this.gravity})`);
    } else if (this.addingGravity == "negative" && !this.grounded) {
      // console.log(`gravity should get set here (negative)`);
      this.gravity = this.verticalVelocity -= this.verticalAcceleration;
      // console.log(`gravity (${this.gravity})`);
    } else if (this.addingGravity == "no" && this.grounded) {
      console.log(`groooooundddd`);
      player.gravity = 0;
      player.verticalVelocity = 2;
      player.verticalAcceleration = 1;
      this.grounded = true;
    }
    this.posY += this.gravity;
  }
}
