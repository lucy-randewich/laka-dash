/*
MAIN CLASS. Passes the canvas element to the game class and calls the starter method.
*/

import { Game } from './game';

window.onload = () => {
    const canvas = document.getElementById('gameCanvas') as HTMLCanvasElement;
    const game = new Game(canvas);
    game.start();
};
