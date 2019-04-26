window.onload = function() {


  var width = navigator.isCocoonJS ? window.innerWidth : app.baseWidth;
  var height = navigator.isCocoonJS ? window.innerHeight : app.baseHeight;
  //app.phaserGame = new Phaser.Game(app.baseWidth, (app.baseWidth / app.gameWidth) * app.gameHeight, Phaser.AUTO, 'game', null, false, false);
  //                                  width, height, renderer,        parent,     state,      transparent,    antialias, physicsConfig
  app.phaserGame = new Phaser.Game(width, height, Phaser.AUTO,   '',     null,       false,          false);
  //app.phaserGame = new Phaser.Game(app.baseWidth, app.baseHeight, Phaser.AUTO,   '',     null,       false,          false);
  app.phaserGame.state.add('Boot', Boot);
  app.phaserGame.state.add('Preloader', Preloader);
  app.phaserGame.state.add('Splash', SplashScreen);
  app.phaserGame.state.add('game', GameState);

  app.phaserGame.state.start('Boot');

};