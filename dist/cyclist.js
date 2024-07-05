/*
CYCLIST CLASS. This is the player of the game. Initialised at floor level.
Contains update function with gravity logic and event listener for jumping.
Collision function handles collisions with obstacle objects.
*/
var Cyclist = /** @class */ (function () {
    function Cyclist(x, y) {
        var _this = this;
        this.width = 30;
        this.height = 30;
        this.gravity = 0.6;
        this.lift = -15;
        this.velocity = 0;
        this.x = x;
        this.y = y;
        // Handle jump if space bar pressed
        window.addEventListener('keydown', function (e) {
            if (e.code === 'Space') {
                _this.jump();
            }
        });
    }
    Cyclist.prototype.update = function () {
        this.velocity += this.gravity;
        this.y += this.velocity;
        if (this.y > 370) { // Assuming ground is y = 370
            this.y = 370;
            this.velocity = 0;
        }
        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    };
    Cyclist.prototype.draw = function (ctx) {
        ctx.fillStyle = 'blue';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };
    Cyclist.prototype.jump = function () {
        if (this.y === 370) { // Can only jump if cyclist is on the ground
            this.velocity = this.lift;
        }
    };
    Cyclist.prototype.collidesWith = function (obstacle) {
        var collides = this.x < obstacle.getX() + obstacle.getWidth() &&
            this.x + this.width > obstacle.getX() &&
            this.y < obstacle.getY() + obstacle.getHeight() &&
            this.y + this.height > obstacle.getY();
        if (collides) {
            console.log("Collision detected!");
        }
        return collides;
    };
    return Cyclist;
}());
export { Cyclist };
