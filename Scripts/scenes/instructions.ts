module scenes {
    export class Instructions extends objects.Scene {
        //  PRIVATE INSTANCE VARIABLES
        private _back: objects.Backgorund;
        private _instructionLabel: objects.Label;
        private _backButton: objects.Button;

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
            // Add Background
            this. _back = new objects.Backgorund("instr_back");
            this.addChild(this._back);

            // Add Instructins
            this._instructionLabel = new objects.Label(
                "PLAY TO WIN", "60px","JFWilwod", "WHITE",
                320, 240, true
                );
            this.addChild(this._instructionLabel);

            // add the start button
            this._backButton = new objects.Button(
                "backButton", 320, 420, true
            )
            
            this.addChild(this._backButton);

            // Back button event listener
            this._backButton.on("click", this.__backButtonClick, this);

            // add this scene to the global scene container
            core.stage.addChild(this);
        }

        public Update():void {
            // scene updates happen here...
            this._back.update();
        }

        // EVENT HANDLERS ++++++++++++++++

        private __backButtonClick(event:createjs.MouseEvent):void {
            // Switch the scene
            core.scene = config.Scene.MENU;
            core.changeScene();
        }
    }
}