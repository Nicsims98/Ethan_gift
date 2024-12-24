class Level {
    constructor(container) {
        this.container = container;
    }

    load() {
        this.container.innerHTML = '<p>Level loaded!</p>';
    }
}

export default Level;
