var InfiniteScroller = InfiniteScroller || {};

//loading the game assets
InfiniteScroller.Preload = function(){};

InfiniteScroller.Preload.prototype = {
  preload: function() {
  
    //show loading screen
    this.preloadBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'preloadbar');
    this.preloadBar.anchor.setTo(0.5);
    this.preloadBar.scale.setTo(3);

    this.load.setPreloadSprite(this.preloadBar);

    //load game assets
    this.load.spritesheet('dog', 'assets/kuvat/kiharvikavelee2.png',116, 163, 2);
    this.load.spritesheet('playerScratch', 'assets/kuvat/itkukiharvi.png', 197, 116, 2);
    this.load.spritesheet('playerDig', 'assets/kuvat/kiharvikyykkaa2.png', 179, 80, 2);
    this.load.image('ground', 'assets/kuvat/maalaatikko2.png');
    this.load.image('sky', 'assets/kuvat/tasuta2.png');
    this.load.image('maa', 'assets/kuvat/maalaatikko3.png')

    //https://www.bensound.com/royalty-free-music/track/creative-minds
    this.load.audio('background', 'assets/audio/background.mp3')
    
    //from http://www.gamedevacademy.org/html5-phaser-tutorial-spacehipster-a-space-exploration-game/
    this.load.image('mound', 'assets/kuvat/rock.png');
    
    //Adapted from https://openclipart.org/detail/6570/flea:
    this.load.spritesheet('flea', 'assets/kuvat/leijona.png', 136, 100, 2);
    
    //https://www.stockio.com/free-icon/easterly-icons-carrot
    this.load.image('bone', 'assets/kuvat/porkkana.png');
    
    //https://openclipart.org/detail/139615/tennis-ball:
    this.load.image('ball', 'assets/kuvat/avain.png');
  },
  create: function() {
    this.state.start('Game');
  }
};