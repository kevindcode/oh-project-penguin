window.onload = function() {
  const Application = {
    init: function() {
      this.setupInitialGameState();
    },
    setupInitialGameState: function() {
      // Objects player, blocks and game_area
      const player = new Player(100, 30, 40, 40, "blue");
      const blocks = this.generateBlocks(10000);
      const clouds = this.generateClouds(100);
      console.log(`player - ${player.gravity}`);
      const game_area = new GameArea(player, blocks, clouds);
      this.handleUserMovement(player);
    },
    generateBlocks: function(amount) {
      let arrayOfBlocks = [];
      arrayOfBlocks.push(new Block(100, 500, 1300, 600, "green"));
      for (let index = 1; index < amount; index++) {
        arrayOfBlocks.push(
          new Block(
            arrayOfBlocks[index - 1].posX + arrayOfBlocks[index - 1].width,
            Math.floor(Math.random() * 400 + 100),
            Math.floor(Math.random() * 100 + 60),
            600,
            this.generateRandomRgb()
          )
        );
      }
      return arrayOfBlocks;
    },
    generateClouds: function(amount) {
      let arrayOfClouds = [];
      for (let index = 1; index < amount; index++) {
        arrayOfClouds.push(new Cloud(this.setCloudPosX(index), this.setCloudPosY(), 30));
      }
      return arrayOfClouds;
    },
    setCloudPosX: function(index) {
      return 200 * index + Math.floor(Math.random() * 200) + 30;
    },
    setCloudPosY: function() {
      return Math.floor(Math.random() * 300) + 30;
    },
    generateRandomRgb: function() {
      let r = Math.floor(Math.random() * 255 + 0);
      let g = Math.floor(Math.random() * 255 + 0);
      let b = Math.floor(Math.random() * 255 + 0);
      return `rgb(${r},${g},${b})`;
    },
    handleUserMovement: function(player) {
      var self = this;
      //Event Handlers
      window.addEventListener("keydown", function(e) {
        self.negativeGravity(player, e);
      });
      window.addEventListener("keyup", function(e) {
        self.positiveGravity(player, e);
      });
    },
    negativeGravity: function(player, e) {
      switch (e.keyCode) {
        case 38:
          console.log("up");
          player.grounded = false;
          if (!player.grounded) {
            player.addingGravity = "negative";
            console.log(`adding gravity: ${player.addingGravity}`);
            break;
          }
      }
    },
    positiveGravity: function(player, e) {
      switch (e.keyCode) {
        case 38:
          console.log("down");
          player.grounded = false;
          if (!player.grounded) player.addingGravity = "positive";

          break;
      }
    }
  }.init();
};
