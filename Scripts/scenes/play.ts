module scenes {
    export class Play extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _background: objects.Backgorund;
        //private _bonus: objects.Bonus;
        private _player: objects.Player;
        //private _bad_guys: objects.Enemies[];
        //private _bullet: objects.Bullet;
        private _collision: managers.Collision;
        private _scoreLabel: objects.Label;
        private _livesLabel: objects.Label;

        private _backTrack: createjs.AbstractSoundInstance;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        private _updateScoreBoard() {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        }

        /**
         * 
         */
        public Start(): void {
            this._background = new objects.Backgorund("lvl_1_back");
            this.addChild(this._background);

            //this._bonus = new objects.Bonus("bonus");
            //this.addChild(this._bonus);


            this._player = new objects.Player("player_stay");
            this._player.skelSpeed = 10;
            this.addChild(this._player);
            core.curr_player = this._player;
            this._backTrack = createjs.Sound.play("back_music");
            this._backTrack.loop = -1;
            var self = this;
            document.addEventListener("keyup", function (event){
                delete core.keys[event.keyCode];
                core.curr_player.gotoAndStop("player_stay");
            });
            //                
            document.addEventListener("keydown", function (event){
                core.curr_player.gotoAndPlay("player_move");
                core.keys[event.keyCode] = true;
                
            });
            //createjs.Ticker.addEventListener('tick', this.handleKeyDown);
            //this._bad_guys = new Array<objects.Enemies>();
            //for (let count = 0; count < 3; count++) {
              //  this._bad_guys.push(new objects.Enemies("enemy"));
                //this.addChild(this._bad_guys[count]);
            //}

            // include a collision managers
            this._collision = new managers.Collision();

            // add lives and score label
            this._livesLabel = new objects.Label("Lives: " + core.lives, "40px", "JFWilwod", "#FFFF00", 10, 5, false);
            this.addChild(this._livesLabel);

            this._scoreLabel = new objects.Label("Score: " + core.score, "40px", "JFWilwod", "#FFFF00", 350, 5, false);
            this.addChild(this._scoreLabel);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        private onkeydown(event) {
            core.keys[event.keyCode] = true; 
        }

        private onkeyup(event){
            delete core.keys[event.keyCode];
        }

        public Update(): void {
            this._background.update();
            //this._bonus.update();
            this._player.update();
            //this._collision.check(this._player, this._bonus);
            

            // update each cloud
            //this._bad_guys.forEach(baddy => {
              //  baddy.update();
                //this._collision.check(this._player, baddy);
            //});

            this._updateScoreBoard();

            if (core.lives < 1) {
                this._backTrack.stop();
                core.scene = config.Scene.OVER;
                core.changeScene();
            }
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event: createjs.MouseEvent): void {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        }
    }
}