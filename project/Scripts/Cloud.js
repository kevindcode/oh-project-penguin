class Cloud {
  constructor(posX, posY, radius) {
    this.posX = posX;
    this.posY = posY;
    this.radius = radius;
    this.velocity = 1;
  }

  display(game_area) {
    let ctx = game_area;
    ctx.beginPath();
    ctx.arc(this.posX, this.posY, this.radius, 0, 2 * Math.PI);
    ctx.arc(this.posX+20, this.posY+20, this.radius, 0, 2 * Math.PI);
    ctx.arc(this.posX-20, this.posY+20, this.radius, 0, 2 * Math.PI);
    ctx.arc(this.posX-30, this.posY-10, this.radius, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "white";
    ctx.fill();
    this.posX -= this.velocity;
  }
}