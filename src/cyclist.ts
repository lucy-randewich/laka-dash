/*
CYCLIST CLASS. This is the player of the game. Initialised at floor level.
Contains update function with gravity logic and event listener for jumping. 
Collision function handles collisions with obstacle objects.
*/

export class Cyclist {
    private x: number;
    private y: number;
    private width: number = 80;
    private height: number = 80;
    private gravity: number = 0.6;
    private lift: number = -15;
    private velocity: number = 0;
    private image: HTMLImageElement;
    private groundPosition: number;

    constructor(x: number, y: number, canvasHeight: number) {
        this.x = x;
        this.y = y;
        this.groundPosition = canvasHeight - this.height;

        this.image = new Image();
        this.image.src = 'images/cyclist.png';

        // Handle jump if space bar pressed
        window.addEventListener('keydown', (e) => {
            if (e.code === 'Space') {
                this.jump();
            }
        });
    }

    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y > this.groundPosition) {
            this.y = this.groundPosition;
            this.velocity = 0;
        }

        if (this.y < 0) {
            this.y = 0;
            this.velocity = 0;
        }
    }

    draw(ctx: CanvasRenderingContext2D) {
        if (this.image.complete) {
            ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
        } else {
            this.image.onload = () => {
                ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
            };
        }
    }

    jump() {
        if (this.y === this.groundPosition) { // Can only jump if cyclist is on the ground
            this.velocity = this.lift;
        }
    }

    collidesWith(obstacle: { getX: () => number, getY: () => number, getWidth: () => number, getHeight: () => number }): boolean {
        const collides = this.x < obstacle.getX() + obstacle.getWidth() &&
                         this.x + this.width > obstacle.getX() &&
                         this.y < obstacle.getY() + obstacle.getHeight() &&
                         this.y + this.height > obstacle.getY();
        
        if (collides) {console.log("Collision detected!");}
        return collides;
    }

}
