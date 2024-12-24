class Game {
    constructor(container) {
        this.container = container;
    }

    start() {
        this.container.innerHTML = '<p>Game started!</p>';
    }
}

export default Game;
