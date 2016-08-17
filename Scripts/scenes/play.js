var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Play = (function (_super) {
        __extends(Play, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Play() {
            _super.call(this);
        }
        Play.prototype._updateScoreBoard = function () {
            this._livesLabel.text = "Lives: " + core.lives;
            this._scoreLabel.text = "Score: " + core.score;
        };
        /**
         *
         */
        Play.prototype.Start = function () {
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
            document.addEventListener("keyup", function (event) {
                delete core.keys[event.keyCode];
                core.curr_player.gotoAndStop("player_stay");
            });
            //                
            document.addEventListener("keydown", function (event) {
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
        };
        Play.prototype.onkeydown = function (event) {
            core.keys[event.keyCode] = true;
        };
        Play.prototype.onkeyup = function (event) {
            delete core.keys[event.keyCode];
        };
        Play.prototype.Update = function () {
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
        };
        // EVENT HANDLERS ++++++++++++++++
        Play.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.OVER;
            core.changeScene();
        };
        return Play;
    }(objects.Scene));
    scenes.Play = Play;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map