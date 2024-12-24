import { createRoom } from './api.js';
import Game from '../components/game.js';
import Level from '../components/level.js';
import Enemy from '../components/enemy.js';

document.addEventListener('DOMContentLoaded', async () => {
    const gameContainer = document.getElementById('game-container');
    const levelContainer = document.getElementById('level-container');
    const enemyContainer = document.getElementById('enemy-container');
    const startGameButton = document.getElementById('start-game');
    const scoreElement = document.getElementById('score');
    const healthElement = document.getElementById('health');
    const progressElement = document.getElementById('progress');

    const game = new Game(gameContainer);
    const level = new Level(levelContainer);
    const enemy = new Enemy(enemyContainer);

    startGameButton.addEventListener('click', async () => {
        await createRoom();
        game.start();
        level.load();
        enemy.spawn();
        updateScore(0);
        updateHealth(100);
        updateProgress(0);
    });

    function updateScore(score) {
        scoreElement.textContent = score;
    }

    function updateHealth(health) {
        healthElement.textContent = health;
    }

    function updateProgress(progress) {
        progressElement.value = progress;
    }
});
