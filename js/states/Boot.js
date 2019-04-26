var Boot = function(game) {};

Boot.prototype = {
    preload: function() {

     },
    create: function() {

        this.game.stage.smoothed = false;
        this.scale.minWidth = app.baseWidth;
        this.scale.minHeight = app.baseHeight;
        this.scale.maxWidth = app.baseWidth * app.scale;
        this.scale.maxHeight = app.baseHeight * app.scale;
        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;

        // catch right click mouse
        this.game.canvas.oncontextmenu = function(e) { e.preventDefault(); };

        this.state.start('Preloader');
    }
};
