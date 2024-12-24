class Enemy {
    constructor(container) {
        this.container = container;
    }

    spawn() {
        this.container.innerHTML = '<p>Enemy spawned!</p>';
    }
}

export default Enemy;
