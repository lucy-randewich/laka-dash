/*
GAME CLASS. Handles the game loop using update and draw functions. Spawns new obstacles 
and checks for collisions between objects. 
*/

import { Cyclist } from './cyclist';
import { Obstacle } from './obstacle';

export class Game {
    private canvas: HTMLCanvasElement;
    private ctx: CanvasRenderingContext2D;
    private cyclist: Cyclist;
    private obstacles: Obstacle[] = [];
    private animationFrameId: number | null = null;
    private score: number = 0;
    private baseObstacleSpeed: number = 3;
    private obstacleSpeedIncrement: number = 0.0008;
    private obstacleSpawnInterval: number = 1500;
    private minObstacleSpawnInterval: number = 1000;
    private obstacleSpawnIntervalDecrement: number = 0.6;
    private lastObstacleSpawnTime: number = 0;
    private scoreDisplay: HTMLElement;

    constructor(canvas: HTMLCanvasElement) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d')!;
        this.cyclist = new Cyclist(canvas.width / 4, canvas.height - 60, canvas.height);
        this.scoreDisplay = document.getElementById('scoreDisplay')!;
    }

    start() {
        console.log(`Starting the game`);
        this.lastObstacleSpawnTime = Date.now();
        this.animationFrameId = requestAnimationFrame(() => this.gameLoop());
    }

    gameLoop() {
        // Set up time delta
        const now = Date.now();
        const deltaTime = now - this.lastObstacleSpawnTime;

        // Update variables according to time and draw to canvas
        this.update(deltaTime);
        this.draw();

        if (this.animationFrameId !== null) {
            this.animationFrameId = requestAnimationFrame(() => this.gameLoop());
        }
    }

    update(deltaTime: number) {
        this.cyclist.update();

        if (deltaTime > this.obstacleSpawnInterval) {
            console.log('Spawning new obstacle');
            const obstacleSpeed = this.baseObstacleSpeed + (this.score * this.obstacleSpeedIncrement);
            this.obstacles.push(new Obstacle(this.canvas.width, this.canvas.height, obstacleSpeed));
            this.lastObstacleSpawnTime = Date.now();
        }

        this.obstacles.forEach(obstacle => obstacle.update());

        this.obstacles = this.obstacles.filter(obstacle => !obstacle.isOffScreen());

        this.obstacles.forEach(obstacle => {
            if (this.cyclist.collidesWith(obstacle)) {
                this.gameOver();
            }
        });

        // Increment score
        this.score += 1;
        this.scoreDisplay.innerText = `Score: ${this.score}`;

        this.increaseDifficulty();
    }

    draw() {
        // Clear canvas 
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        // Draw cyclist and obstacles
        this.cyclist.draw(this.ctx);
        this.obstacles.forEach(obstacle => obstacle.draw(this.ctx));
    }

    // Increase obstacle speed and decrease spawn interval
    increaseDifficulty() {
        this.baseObstacleSpeed += this.obstacleSpeedIncrement;
        this.obstacleSpawnInterval = Math.max(this.minObstacleSpawnInterval, this.obstacleSpawnInterval - this.obstacleSpawnIntervalDecrement);
    }

    gameOver() {
        if (this.animationFrameId !== null) {
            cancelAnimationFrame(this.animationFrameId);
            this.animationFrameId = null;
        }
        alert(`Game Over! Your score: ${this.score}`);
        window.location.reload();
    }
}
