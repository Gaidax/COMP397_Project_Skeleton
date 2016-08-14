var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Menu = (function (_super) {
        __extends(Menu, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Menu() {
            _super.call(this);
        }
        /**
         *
         */
        Menu.prototype.Start = function () {
            // Add Ocean Background
            this._background = new objects.Backgorund("menu_back");
            this.addChild(this._background);
            // Add Menu Label
            this._menuLabel = new objects.Label("SKELETONE VENTURE", "60px", "JFWilwod", "WHITE", 400, 240, true);
            this.addChild(this._menuLabel);
            // add the start button
            this._startButton = new objects.Button("startButton", 400, 420, true);
            this._instructButton = new objects.Button("instructButton", 400, 490, true);
            this._backTrack = createjs.Sound.play("menu_spooky");
            this._backTrack.loop = -1;
            this.addChild(this._startButton);
            this.addChild(this._instructButton);
            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._instructButton.on("click", this._instructButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Menu.prototype.Update = function () {
            // scene updates happen here...
            this._background.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Menu.prototype._startButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        };
        Menu.prototype._instructButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.INSTRUCT;
            core.changeScene();
        };
        return Menu;
    }(objects.Scene));
    scenes.Menu = Menu;
})(scenes || (scenes = {}));
//# sourceMappingURL=menu.js.map