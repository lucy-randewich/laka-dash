/*
OBSTACLE CLASS. Handles rendering of obstacle objects and updates locations based
on specified speed.
*/
var Obstacle = /** @class */ (function () {
    function Obstacle(x, y) {
        this.width = 20;
        this.height = 30;
        this.speed = 3;
        this.x = x;
        this.y = y;
    }
    Obstacle.prototype.update = function () {
        this.x -= this.speed;
    };
    Obstacle.prototype.draw = function (ctx) {
        ctx.fillStyle = 'red';
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
