var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        if(!app) {
            throw new Error("Invaid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }

        // container which will be returned
        var background;
        var tree;
        var buildings = [];
        var building;
        // Add any variables that will be used by render AND update here:
        
        // add objects for display inb ackground
        // called at the start of game and whenever the page is resized
        function render() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            var buildingHeight = [];
            background.removeAllChildren();
        
            // this fills the background with a obnoxious yellow
            // you should modify this to suit your game
            var backgroundFill = draw.bitmap('/projects/runtime/img/citybg.png');
            backgroundFill.x = 0;
            backgroundFill.y = 0;
            var citybgHeight = 886;
            var citybgWidth = 1946;
            backgroundFill.scaleX = canvasWidth / citybgWidth;
            backgroundFill.scaleY = groundY / citybgHeight;
            background.addChild(backgroundFill);
            
            //floor
            var floor = draw.rect(canvasWidth, 15, 'LightGray', 'black', 1);
            floor.x = 0;
            floor.y = groundY
            background.addChild(floor);
            
            // TODO: 3 - Add a moon and starfield
            
            //  TODO: 5 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            var buildingHeight = 403;
            for(var i = 0; i < 5; ++i) {
             building = draw.bitmap('/projects/runtime/img/BUilding.png');
             building.x = 300*i;
             building.y = groundY - buildingHeight;
             background.addChild(building);
             buildings.push(building);
            }
            
            // TODO 4: Part 1 - Add a tree
            tree = draw.bitmap('img/tree.png');
            tree.x = 200;
            tree.y = 200;
            background.addChild(tree);
                
            
        }
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 4: Part 2 - Move the tree!
            tree.x = tree.x - 1.5;
            if(tree.x < -200) {
                tree.x = canvasWidth;
            }
            // TODO 5: Part 2 - Parallax
            for(var b = 0; b < buildings.length; b++) {
                buildings[b].x = buildings[b].x - .7;
                if(buildings[b].x < -200) {
                    buildings[b].x = canvasWidth;
            }
            }

        }

        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        app.addResizeable(background);
        app.addUpdateable(background);
        
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
