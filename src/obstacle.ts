/*
OBSTACLE CLASS. Handles rendering of obstacle objects and updates locations based
on specified speed. 
*/

export class Obstacle {
    private x: number;
    private y: number;
    private width: number;
    private height: number;
    private speed: number;
    private minHeight: number = 20;
    private maxHeight: number = 50;
    private minWidth: number = 10;
    private maxWidth: number = 30;

    constructor(x: number, canvasHeight: number, speed: number) {
        this.x = x;
        this.height = this.getRandomHeight();
        this.width = this.getRandomWidth();
        this.y = canvasHeight - this.height;
        this.speed = speed;
    }

    getRandomHeight(): number {
        return Math.floor(Math.random() * (this.maxHeight - this.minHeight + 1)) + this.minHeight;
    }

    getRandomWidth(): number {
        return Math.floor(Math.random() * (this.maxWidth - this.minWidth + 1)) + this.minWidth;
    }

    update() {
        this.x -= this.speed;
    }

    draw(ctx: CanvasRenderingContext2D) {
        ctx.fillStyle = '#FF6B6B'; 
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
