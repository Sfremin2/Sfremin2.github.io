var level01 = function (window) {

    window.opspark = window.opspark || {};

    var draw = window.opspark.draw;
    var createjs = window.createjs;

    window.opspark.runLevelInGame = function(game) {
        // some useful constants 
        var groundY = game.groundY;

        // this data will allow us to define all of the
        // behavior of our game
        var levelData = {
            name: "Robot Romp",
            number: 1, 
            speed: -3,
            gameItems: [
                {type: 'bush',x:2500,y:groundY},
                {type: 'bush',x:400,y:groundY},
                {type: 'bush',x:900,y:groundY},
                {type: 'bush',x:2000,y:groundY},
                {type: 'cart',x:1700,y:groundY},
                {type: 'cart',x:2400,y:groundY},
                {type: 'bush',x:2900,y:groundY},
                {type: 'cart',x:3400,y:groundY},
                {type: 'bush',x:4000,y:groundY},
                {type: 'bush',x:4780,y:groundY},
                {type: 'cart',x:5150,y:groundY},
                {type: 'bush',x:5700,y:groundY},
                {type: 'bush',x:6000,y:groundY},
                {type: 'bush',x:6375,y:groundY},
                {type: 'cart',x:4675,y:groundY}
            ]
        };
        window.levelData = levelData;
        // set this to true or false depending on if you want to see hitzones
        game.setDebugMode(true);

        // BEGIN EDITING YOUR CODE HERE
        game.s
        var damageSound;
        damageSound = new sound('/projects/runtime/Sounds/Roblox death sound slomotion earrape (128  kbps).mp3');
        var goodBeansSound;
        goodBeansSound = new sound('/projects/runtime/Sounds/Super Mario Bros.-Coin Sound Effect (128  kbps).mp3');
        function sound(src) {
            this.sound = document.createElement("audio");
            this.sound.src = src;
            this.sound.setAttribute("preload", "auto");
            this.sound.setAttribute("controls", "none");
            this.sound.style.display = "none";
            document.body.appendChild(this.sound);
            this.play = function(){
                this.sound.play();
            }
            this.stop = function(){
                this.sound.pause();
            }
        }
        
        
        function createBushBois(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('/projects/runtime/img/Bush\'s baked bois of doom.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -35;
            obstacleImage.y = -45;
            myObstacle.rotationalVelocity = 10;
            myObstacle.onPlayerCollision = function() {
                damageSound.play();
                game.changeIntegrity(-10);
            }
        }
        
        function createCartBois(x,y) {
            var hitZoneSize = 25;
            var damageFromObstacle = 10;
            var myObstacle = game.createObstacle(hitZoneSize, damageFromObstacle);
            myObstacle.x = x;
            myObstacle.y = y;
            game.addGameItem(myObstacle);
            var obstacleImage = draw.bitmap('/projects/runtime/img/Deadly Cart.png');
            myObstacle.addChild(obstacleImage);
            obstacleImage.x = -70;
            obstacleImage.y = -95;
            myObstacle.onPlayerCollision = function() {
                damageSound.play();
                game.changeIntegrity(-10);
            }
        }
        
        function createReward(x,y) {
            var reward = game.createGameItem('reward',25);
            var offBrandGoodBakedBois = draw.bitmap('/projects/runtime/img/Off brand baked bois of goodness.png');
            offBrandGoodBakedBois.x = -25;
            offBrandGoodBakedBois.y = -25;
            reward.addChild(offBrandGoodBakedBois);
            reward.x = x;
            reward.y = y;
            game.addGameItem(reward);
            reward.velocityX = -2;
            
            reward.onPlayerCollision = function() {
                console.log('Halle got her good beeeennnsssss!!!!!!!');
                game.increaseScore(500);
                reward.fadeOut();
                goodBeansSound.play();
            }
        }
        
        
        function createEnemy(x,y) {
            var enemy = game.createGameItem('enemy',25);
            var homelessBoi = draw.bitmap('/projects/runtime/img/Angry Homeless Boi.png');
            homelessBoi.x = -100;
            homelessBoi.y = -175;
            enemy.addChild(homelessBoi);
            enemy.x = x;
            enemy.y = y;
            game.addGameItem(enemy);
            enemy.velocityX = -2;
            
            enemy.onProjectileCollision = function() {
                console.log('Halle don shoot the angri homeless boi');
                game.increaseScore(250);
                enemy.fadeOut();
            }
            
            enemy.onPlayerCollision = function() {
              console.log('The angri homeless boi cut Halle with his broken bottle!!!!');
              game.changeIntegrity(-20);
              damageSound.play();
              enemy.flyTo(x+500, groundY);
            };
        }
        
        createEnemy(2000,groundY-50);
        createEnemy(4500,groundY-50);
        createEnemy(7000,groundY-50);
        createEnemy(1000,groundY-50);
        createReward(1250,groundY-150);
        createReward(2250,groundY-150);
        createReward(4750,groundY-150);
        createReward(7250,groundY-150);
        
        for(var i = 0; i < levelData.gameItems.length; i++) {
            var gameItem = levelData.gameItems[i];
            var x = gameItem.x;
            var y = gameItem.y;
            var type = gameItem.type;
            if(type === 'bush') {
                createBushBois(x,y);
            } else if(type === 'cart') {
                createCartBois(x,y);
            }
        }
    }
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = level01;
}