/*
OBSTACLE CLASS. Handles rendering of obstacle objects and updates locations based
on specified speed.
*/
var Obstacle = /** @class */ (function () {
    function Obstacle(x, canvasHeight, speed) {
        this.minHeight = 20;
        this.maxHeight = 50;
        this.minWidth = 10;
        this.maxWidth = 30;
        this.x = x;
        this.height = this.getRandomHeight();
        this.width = this.getRandomWidth();
        this.y = canvasHeight - this.height;
        this.speed = speed;
    }
    Obstacle.prototype.getRandomHeight = function () {
        return Math.floor(Math.random() * (this.maxHeight - this.minHeight + 1)) + this.minHeight;
    };
    Obstacle.prototype.getRandomWidth = function () {
        return Math.floor(Math.random() * (this.maxWidth - this.minWidth + 1)) + this.minWidth;
    };
    Obstacle.prototype.update = function () {
        this.x -= this.speed;
    };
    Obstacle.prototype.draw = function (ctx) {
        ctx.fillStyle = '#FF6B6B';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    Obstacle.prototype.isOffScreen = function () {
        return this.x + this.width < 0;
    };
    // Getter functions
    Obstacle.prototype.getX = function () {
        return this.x;
    };
    Obstacle.prototype.getY = function () {
        return this.y;
    };
    Obstacle.prototype.getWidth = function () {
        return this.width;
    };
    Obstacle.prototype.getHeight = function () {
        return this.height;
    };
    return Obstacle;
}());
export { Obstacle };
