var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var scenes;
(function (scenes) {
    var Instructions = (function (_super) {
        __extends(Instructions, _super);
        /**
         * Creates an instance of Menu.
         *
         */
        function Instructions() {
            _super.call(this);
        }
        /**
         *
         */
        Instructions.prototype.Start = function () {
            // Add Background
            this._back = new objects.Backgorund("instr_back");
            this.addChild(this._back);
            // Add Instructins
            this._instructionLabel = new objects.Label("The game is played with keyboard.\n Use arrows (up, down, left, right)\n, to move, space to jump and ‘e’ to throw spear.\n You can also climb or descend ladders!\n", "20px", "JFWilwod", "YELLOW", 1200, 240, true);
            this.addChild(this._instructionLabel);
            // add the start button
            this._backButton = new objects.Button("backButton", 320, 420, true);
            this.addChild(this._backButton);
            // Back button event listener
            this._backButton.on("click", this.__backButtonClick, this);
            // add this scene to the global scene container
            core.stage.addChild(this);
        };
        Instructions.prototype.Update = function () {
            // scene updates happen here...
            this._back.update();
        };
        // EVENT HANDLERS ++++++++++++++++
        Instructions.prototype.__backButtonClick = function (event) {
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        };
        return Instructions;
    }(objects.Scene));
    scenes.Instructions = Instructions;
})(scenes || (scenes = {}));
//# sourceMappingURL=instructions.js.map