/*
OBSTACLE CLASS. Handles rendering of obstacle objects and updates locations based
on specified speed. 
*/

export class Obstacle {
    private x: number;
    private y: number;
    private width: number = 20;
    private height: number = 30;
    private speed: number = 3;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }

    update() {
        this.x -= this.speed;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = 'red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    isOffScreen(): boolean {
        return this.x + this.width < 0;
    }

    // Getter functions
    getX(): number {
        return this.x;
    }
    getY(): number {
        return this.y;
    }
    getWidth(): number {
        return this.width;
    }
    getHeight(): number {
        return this.height;
    }
}
