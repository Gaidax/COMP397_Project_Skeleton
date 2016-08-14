module scenes {
    export class Menu extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _background: objects.Backgorund;
        private _menuLabel: objects.Label;
        private _startButton: objects.Button;
        private _instructButton: objects.Button;
        private _backTrack: createjs.AbstractSoundInstance;

        /**
         * Creates an instance of Menu.
         * 
         */
        constructor() {
            super();
        }

        /**
         * 
         */
        public Start():void {
            // Add Ocean Background
            this._background = new objects.Backgorund("menu_back");
            this.addChild(this._background);

            // Add Menu Label
            this._menuLabel = new objects.Label(
                "SKELETONE VENTURE", "60px","JFWilwod", "WHITE",
                400, 240, true
                );
            this.addChild(this._menuLabel);

            // add the start button
            this._startButton = new objects.Button(
                "startButton", 400, 420, true
            )
            
            this._instructButton = new objects.Button(
                "instructButton", 400, 490, true
            )
            this._backTrack = createjs.Sound.play("menu_spooky");
            this._backTrack.loop = -1;

            this.addChild(this._startButton);
            this.addChild(this._instructButton);

            // Start button event listener
            this._startButton.on("click", this._startButtonClick, this);
            this._instructButton.on("click", this._instructButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            this._background.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private _startButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.PLAY;
            core.changeScene();
        }
        private _instructButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.INSTRUCT;
            core.changeScene();
        }
    }
}