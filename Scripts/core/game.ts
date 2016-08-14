/// <reference path="_reference.ts"/>

/**
 * @author Vasyl Milchevskyi
 * @studentID 300839782
 * @date August 3d, 2016
 * @description This file is the entry point for the game
 * @version 0.1 - Initial version of the boilerplate
 */

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

namespace core {

    // Variable Declarations

    // declare a reference to the Preloader
    export let assets: createjs.LoadQueue;

    // declare textureAtlas
    export let menuAtlas: createjs.SpriteSheet;
    export let playerAtlas: createjs.SpriteSheet;

    // make a reference to the canvas element
    let canvas: HTMLElement = document.getElementById("canvas");
    // create a reference to a stage container
    export let stage: createjs.Stage;

    // score and lives variables
    export let score: number = 0;
    export let highScore: number = 0;
    export let lives: number = 5;
    export let keys: boolean[] = [];
    let helloLabel: objects.Label;

    let startButton: objects.Button; // reference to our button class

    // declare scene variables
    let currentScene: objects.Scene;
    export let scene: number;

    let menu: scenes.Menu;
    let instruct: scenes.Instructions;
    let over: scenes.Over;
    let play: scenes.Play;

    // asset manifest for images and sounds
    let assetData: objects.Asset[] = [
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
    function preload(): void {
        assets = new createjs.LoadQueue(); // instantiates the loader
        assets.installPlugin(createjs.Sound);
        assets.on("complete", init, this);
        assets.loadManifest(assetData);
    }


    /**
     * This method is the entry point for the application
     * 
     * @method init
     * @return {void}
     */
    function init(): void {
        stage = new createjs.Stage(canvas); // instatiate the stage container
        stage.enableMouseOver(20);
        createjs.Ticker.framerate = 60;
        createjs.Ticker.on("tick", gameLoop); // create an event listener for the tick event

        let menuAtlData = {
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

            let playerAtlData = {
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
        menuAtlas = new createjs.SpriteSheet(menuAtlData);
        playerAtlas = new createjs.SpriteSheet(playerAtlData);

        // setup the default scene
        scene = config.Scene.MENU;
        changeScene();
    }

    /**
     * This is the main game loop
     * 
     * @method gameLoop
     * @param {createjs.Event} event
     * @returns {void}
     */
    function gameLoop(event: createjs.Event): void {

        // call the scenes's update
        currentScene.Update();

        stage.update(); // refreshes the stage
    }

    /**
     * This is the startButton click event handler
     * 
     * @param {createjs.MouseEvent} event
     */
    function startButtonClick(event: createjs.MouseEvent) {
        helloLabel.text = "clicked!";
    }

    export function changeScene(): void {

        //Launch Various Scenes
        switch (scene) {
            // Show the MENU Scene
            case config.Scene.MENU:
                stage.removeAllChildren();
                menu = new scenes.Menu();
                currentScene = menu;
                break;
            case config.Scene.INSTRUCT:
                stage.removeAllChildren();
                instruct = new scenes.Instructions();
                currentScene = instruct;
                break;
            // Show the PLAY Scene
            case config.Scene.PLAY:
                stage.removeAllChildren();
                play = new scenes.Play();
                currentScene = play;
                break;
            // Show the GAME OVER Scene
            case config.Scene.OVER:
                stage.removeAllChildren();
                over = new scenes.Over();
                currentScene = over;
                break;
        }
    }



    //wait until the window object is finished loading then call the init method
    window.addEventListener("load", preload);

}
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++