module objects {
    /**
     * This is the Player object used in the game
     * 
     * @export
     * @class Player
     * @extends {objects.GameObject}
     */
    export class Player extends objects.GameObject {
         // PRIVATE INSTANCE VARIABLES ++++++++++++++++++++++++++++

        // PUBLIC PROPERTIES +++++++++++++++++++++++++++++++++++++++
        public skelSpeed: number;
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of Island.
         * 
         * @constructor
         * @param {string} imageString
         */
        constructor(imageString:string) {
            super(core.playerAtlas, imageString)

            this.start();
        }

         /**
         * This method checks if the object has reached its boundaries
         * 
         * @private
         * @method _checkBounds
         * @returns {void}
         *             // checkbounds to stop player from going outside

            // check right bounds
            if(this.x >= (640 - (this.width * 0.5))) {
                this.x = (640 - (this.width * 0.5));
            }

            // check left bounds
            if(this.x <= (0 + (this.width * 0.5))) {
                this.x = (0 + (this.width * 0.5));
            }
         */
        private _checkBounds():void {
            if(core.keys) {
                //console.log(core.keys);
                
            if(core.keys[37]) {
                this.x -=this.skelSpeed;
            } 
            if(core.keys[38]) {
                this.y -=this.skelSpeed;
            }
            if(core.keys[39]) {
                this.x +=this.skelSpeed;
            }
            if(core.keys[40]) {
                this.y +=20;
            }
        }
        }

        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++

        /**
         * This method is used to initialize public properties 
         * and private instance variables
         * 
         * @public 
         * @method start
         * @returns {void}
         */
        public start():void {
            this.y = 430;
        }

        /**
         * This method updates the object's properties
         * every time it's called
         * 
         * @public 
         * @method update
         * @returns {void}
         */
        public update():void {
            // player to follow mouse
            this.position = new Vector2(this.x, this.y);
            //this.x = core.stage.mouseX;
            this._checkBounds();

        }
    }
}