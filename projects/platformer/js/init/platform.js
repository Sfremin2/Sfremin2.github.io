(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    window.opspark.platform = window.opspark.platform || {};
    
    let platform = window.opspark.platform;
    
    /**
     * init: This function initializes the platforms for the level.
     * 
     * GOAL: Add as many platforms necessary to make your level challenging.
     * 
     * Use the platform.create() method to create platforms for the level. 
     * 
     * platform.create() takes these arguments:
     *      
     *      platform.create(x, y, scaleX, scaleY);
     * 
     *      x: The x coordineate for the platform.
     *      y: The y coordineate for the platform.
     *      scaleX: OPTIONAL The scale factor on the x-axis, this value will 
     *              stretch the platform in width.
     *      scaleY: OPTIONAL The scale factor on the y-axis, this value will 
     *              stretch the platform in height.
     */ 
    platform.init = function (game) {
        ////////////////////////////////////////////////////////////////////////
        // ALL YOUR CODE GOES BELOW HERE ///////////////////////////////////////
        
        /*
         * ground : here, we create a floor. Given the width of of the platform 
         * asset, giving it a scaleX and scaleY of 2 will stretch it across the 
         * bottom of the game.
         */
        //platform.create(0, game.world.height - 32, 3, 2);

        // example:
        platform.create(0, 100, 1.75); //platform top
        platform.create(850, 100,.5);
        platform.create(220, 250, 1.75); //platform level 2 
        platform.create(0, 250, .15)
        platform.create(800, 400, .5); //platform 3 right
        platform.create(0, 400, 1.5); //platform 3(4) left
        platform.create(150, 550, 2, 5); //platform 5
        // ALL YOUR CODE GOES ABOVE HERE ///////////////////////////////////////
        ////////////////////////////////////////////////////////////////////////
    };
})(window);