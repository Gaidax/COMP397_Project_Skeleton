/// <reference path="_reference.ts"/>
/**
 * @author Vasyl Milchevskyi
 * @studentID 300839782
 * @date August 3d, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the boilerplate
 */
// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
var core;
(function (core) {
    // make a reference to the canvas element
    var canvas = document.getElementById("canvas");
    // score and lives variables
    core.score = 0;
    core.highScore = 0;
    core.lives = 5;
    core.keys = [];
    var helloLabel;
    var startButton; // reference to our button class
    // declare scene variables
    var currentScene;
    var menu;
    var instruct;
    var over;
    var play;
    // asset manifest for images and sounds
    var assetData = [
        { id: "menu_back", src: "../../Assets/images/skeleton_menu.jpg" },
        { id: "instr_back", src: "../../Assets/images/instruct_back.jpg" },
        { id: "menu_sheet", src: "../../Assets/images/menu_sheet.png" },
        { id: "menu_spooky", src: "../../Assets/audio/mysterious_forest.mp3" },
        { id: "skeletone", src: "../../Assets/images/skeleton.png" },
        { id: "lvl_1_back", src: "../../Assets/images/lvl_1_back.png" },
    ];
    /**
     * This method preloads assets for the game
     *
     * @method preload
     * @returns {void}
     */
    function preload() {
        core.assets = new createjs.LoadQueue(); // instantiates the loader
        core.assets.installPlugin(createjs.Sound);
        core.assets.on("complete", init, this);
        core.assets.loadManifest(assetData);
    }
    /**
     * This method is the entry point for the application
     *
     * @method init
     * @return {void}
     */
    function init() {
        core.stage = new createjs.Stage(canvas); // instatiate the stage container
        core.stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event
        var menuAtlData = {
            "images": [
                core.assets.getResult("menu_sheet")
            ],
            "frames": [
                [1, 1, 190, 49, 0, 0, 0],
                [1, 49, 190, 45, 0, 0, 0],
                [378, 143, 39, 31, 0, 0, 0],
            ],
            "animations": {
                "startButton": [0],
                "instructButton": [1],
                "backButton": [2]
            }
        };
        var playerAtlData = {
            "images": [
                core.assets.getResult("skeletone")
            ],
            "frames": [
                [210, 718, 30, 49, 0, 0, 0],
            ],
            "animations": {
                "player_move": [0],
            }
        };
        // added textureAtlas
        core.menuAtlas = new createjs.SpriteSheet(menuAtlData);
        core.playerAtlas = new createjs.SpriteSheet(playerAtlData);
        // setup the default scene
        core.scene = config.Scene.MENU;
        changeScene();
    }
    /**
     * This is the main game loop
     *
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event) {
        // call the scenes's update
        currentScene.Update();
        core.stage.update(); // refreshes the stage
    }
    /**
     * This is the startButton click event handler
     *
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event) {
        helloLabel.text = "clicked!";
    }
    function changeScene() {
        //Launch Various Scenes
        switch (core.scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                core.stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            case config.Scene.INSTRUCT:
                core.stage.removeAllChildren();
                instruct = new scenes.Instructions();
                currentScene = instruct;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                core.stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                core.stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }
    core.changeScene = changeScene;
    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);
})(core || (core = {}));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 
//# sourceMappingURL=game.js.map