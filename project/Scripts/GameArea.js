class GameArea {

  // Game Canvas Settings
  constructor(player, blocks, clouds) {
    this.canvas = document.getElementById('gameCanvas');
    this.context = this.canvas.getContext("2d");
    this.canvas.width = 900;
    this.canvas.height = 600;
    this.player = player;
    this.blocks = blocks;
    this.clouds = clouds;
    this.interval = setInterval(() => {
      this.clear();
      this.updateGameArea();


    }, 20);
  }
  //Clear the game canvas 
  clear() {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }
  // Update canvas game context 
  updateGameArea() {
    this.clouds.forEach(element => {
      element.display(this.context);
    });
    this.player.display(this.context);
    this.player.update();
    this.blocks.forEach(element => {
      element.display(this.context);
      element.checkCollision(this.player);

    });




  }
}