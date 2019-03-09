window.addEventListener('load', () => {
      // Objects player, blocks and game_area
      let player = new Player(100, 30, 40, 40, 'blue');
      let blocks = generateBlocks(10000);
      let clouds = generateClouds(100);
      let game_area = new GameArea(player, blocks, clouds);


      //Event Handlers
      window.addEventListener("keydown", negativeGravity);
      window.addEventListener("keyup", positiveGravity);

      function negativeGravity(e) {
        switch (e.keyCode) {
          case 38:
            player.grounded = false;
            if (!player.grounded) {
              player.addingGravity = 'negative';
              break;
            }
        }
      }

      function positiveGravity(e) {
        switch (e.keyCode) {
          case 38:
            player.grounded = false;
            if (!player.grounded)
              player.addingGravity = 'positive';

            break;
        }
      }


      function generateBlocks(amount) {
        let arrayOfBlocks = [];
        arrayOfBlocks.push(new Block(100, 500, 1300, 600, 'green'));
        for (let index = 1; index < amount; index++) {
          arrayOfBlocks.push(new Block(arrayOfBlocks[index - 1].posX + arrayOfBlocks[index - 1].width, Math.floor((Math.random() * 400) + 100), Math.floor((Math.random() * 100) + 60), 600, generateRandomRgb()));
        }
        return arrayOfBlocks;
      }

      function generateClouds(amount) {
        let arrayOfClouds = [];
          for (let index = 1; index < amount; index++) {
            arrayOfClouds.push(new Cloud((200 * index)+ Math.floor(Math.random()*200)+30 ,Math.floor(Math.random()*300)+30,30));
          }
          return arrayOfClouds;
        }


        function generateRandomRgb() {
          let rgb = "";
          let r = Math.floor((Math.random() * 255) + 0);
          let g = Math.floor((Math.random() * 255) + 0);
          let b = Math.floor((Math.random() * 255) + 0);
          rgb =  `rgb(${r},${g},${b})`;
          console.log(rgb);
          return rgb
        }

      });