# Laka Dash

Welcome to Laka Dash! This is a simple recreation of the Chrome Dino game implemented to show Ben that I can learn Typescript quickly ;) 

The player controls the jumping motion of a cyclist to avoid obstacles and gain points. The game is built using TypeScript and HTML5 Canvas.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Game Mechanics](#game-mechanics)
- [Testing](#testing)

## Installation

To play Laka Dash, follow these steps:

1. **Clone the repository**:
    ```sh
    git clone https://github.com/lucy-randewich/laka-dash.git
    cd laka-dash
    ```

2. **Install the dependencies**:
    ```sh
    npm install
    ```

3. **Run the development server**:
    ```sh
    npm start
    ```

This will start a development server and open the game in your default web browser.

## Usage

- **Start the game**: The game starts automatically when the page loads.
- **Control the cyclist**: Press the spacebar to make the cyclist jump to avoid obstacles.

## Game Mechanics

- **Cyclist Movement**: The cyclist moves automatically to the right. The player can make the cyclist jump by pressing the space bar to avoid obstacles.
- **Obstacles**: Various obstacles appear from the right side of the screen that the cyclist must avoid.
- **Scoring**: The player's score increments as they stay alive for more time.
- **Game Over**: The game ends when the cyclist hits an obstacle.

## Testing

- Some (very non exhaustive) unit tests can be run for the position of the cyclist
- Test suite is written with Jest 

1. **Run the test suite**:
    ```sh
    npm test
    ```
