var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var objects;
(function (objects) {
    /**
     * This is the Backgorund object used in the game
     *
     * @export
     * @class Background
     * @extends {createjs.Bitmap}
     */
    var Backgorund = (function (_super) {
        __extends(Backgorund, _super);
        // CONSTRUCTORS +++++++++++++++++++++++++++++++++++++++++++
        /**
         * Creates an instance of background.
         *
         * @constructor
         * @param {string} imageString
         */
        function Backgorund(imageString) {
            _super.call(this, core.assets.getResult(imageString));
            this.start();
        }
        // PRIVATE METHODS ++++++++++++++++++++++++++++++++++++++++++++
        /**
         * Resets the object outside of the viewport
         *
         * @private
         * @method _reset
         * @returns {void}
         */
        Backgorund.prototype._reset = function () {
            this.y = 0;
        };
        /**
         * This method checks if the object has reached its boundaries
         *
         * @private
         * @method _checkBounds
         * @returns {void}
         */
        Backgorund.prototype._checkBounds = function () {
        };
        // PUBLIC METHODS +++++++++++++++++++++++++++++++++++++++++++++
        /**
         * This method is used to initialize public properties
         * and private instance variables
         *
         * @public
         * @method start
         * @returns {void}
         */
        Backgorund.prototype.start = function () {
        };
        /**
         * This method updates the object's properties
         * every time it's called
         *
         * @public
         * @method update
         * @returns {void}
         */
        Backgorund.prototype.update = function () {
            this._checkBounds();
        };
        return Backgorund;
    }(createjs.Bitmap));
    objects.Backgorund = Backgorund;
})(objects || (objects = {}));
//# sourceMappingURL=background.js.map