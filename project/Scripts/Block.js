class Block {
  constructor(posX, posY, width, height, colour) {
    this.posX = posX;
    this.posY = posY;
    this.width = width;
    this.height = height;
    this.colour = colour;
    this.length = this.posX + this.width - this.posX;
    this.collisionOffset = 3;
  }

  display(game_area) {
    let ctx = game_area;
    ctx.fillStyle = this.colour;
    ctx.fillRect(this.posX, this.posY, this.width, this.height);
    this.posX -= 5;
  }

  checkCollision(player) {

    if (player.posY + player.height > this.posY && player.posX + player.width > this.posX && player.posX < this.posX + this.width) {
      player.addingGravity = 'no';
      player.grounded = true;
      player.posY = (this.posY - player.height) - this.collisionOffset;
     
    }
    else{
      player.onPlatform = false;
    }
    if (player.grounded && !player.onPlatform){
      player.grounded = false;
      player.gravity = 0;
      player.verticalvelocity = 3;
      player.verticalAcceleration = 1;
      player.addingGravity = 'positive';
    }
  }
}