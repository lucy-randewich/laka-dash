/*
GAME CLASS. Handles the game loop using update and draw functions. Spawns new obstacles
and checks for collisions between objects.
*/
import { Cyclist } from './cyclist';
import { Obstacle } from './obstacle';
var Game = /** @class */ (function () {
    function Game(canvas) {
        this.obstacles = [];
        this.animationFrameId = null;
        this.score = 0;
        this.baseObstacleSpeed = 3;
        this.obstacleSpeedIncrement = 0.0005;
        this.obstacleSpawnInterval = 1500;
        this.minObstacleSpawnInterval = 1300;
        this.obstacleSpawnIntervalDecrement = 0.5;
        this.lastObstacleSpawnTime = 0;
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.cyclist = new Cyclist(canvas.width / 4, canvas.height - 60, canvas.height);
        this.scoreDisplay = document.getElementById('scoreDisplay');
    }
    Game.prototype.start = function () {
        var _this = this;
        console.log("Starting the game");
        this.lastObstacleSpawnTime = Date.now();
        this.animationFrameId = requestAnimationFrame(function () { return _this.gameLoop(); });
    };
    Game.prototype.gameLoop = function () {
        var _this = this;
        // Set up time delta
        var now = Date.now();
        var deltaTime = now - this.lastObstacleSpawnTime;
        // Update variables according to time and draw to canvas
        this.update(deltaTime);
        this.draw();
        if (this.animationFrameId !== null) {
            this.animationFrameId = requestAnimationFrame(function () { return _this.gameLoop(); });
        }
    };
    Game.prototype.update = function (deltaTime) {
        var _this = this;
        this.cyclist.update();
        if (deltaTime > this.obstacleSpawnInterval) {
            console.log('Spawning new obstacle');
            var obstacleSpeed = this.baseObstacleSpeed + (this.score * this.obstacleSpeedIncrement);
            this.obstacles.push(new Obstacle(this.canvas.width, this.canvas.height, obstacleSpeed));
            this.lastObstacleSpawnTime = Date.now();
        }
        this.obstacles.forEach(function (obstacle) { return obstacle.update(); });
        this.obstacles = this.obstacles.filter(function (obstacle) { return !obstacle.isOffScreen(); });
        this.obstacles.forEach(function (obstacle) {
            if (_this.cyclist.collidesWith(obstacle)) {
                _this.gameOver();
            }
        });
        // Increment score
        this.score += 1;
        this.scoreDisplay.innerText = "Score: ".concat(this.score);
        this.increaseDifficulty();
    };
    Game.prototype.draw = function () {
        var _this = this;
        // Clear canvas 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        // Draw cyclist and obstacles
        this.cyclist.draw(this.ctx);
        this.obstacles.forEach(function (obstacle) { return obstacle.draw(_this.ctx); });
    };
    // Increase obstacle speed and decrease spawn interval
    Game.prototype.increaseDifficulty = function () {
        this.baseObstacleSpeed += this.obstacleSpeedIncrement;
        this.obstacleSpawnInterval = Math.max(this.minObstacleSpawnInterval, this.obstacleSpawnInterval - this.obstacleSpawnIntervalDecrement);
    };
    Game.prototype.gameOver = function () {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        alert("Game Over! Your score: ".concat(this.score));
        window.location.reload();
    };
    return Game;
}());
export { Game };
