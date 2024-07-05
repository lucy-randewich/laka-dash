/*
MAIN CLASS. Passes the canvas element to the game class and calls the starter method.
*/
import { Game } from './game';
window.onload = function () {
    var canvas = document.getElementById('gameCanvas');
    var game = new Game(canvas);
    game.start();
};
