class Stopwatch {
    constructor() {
        this.startTime = 0;
        this.elapsedTime = 0;
        this.running = false;
        this.interval = null;
    }

    start() {
        if (!this.running) {
            this.startTime = Date.now() - this.elapsedTime;
            this.interval = setInterval(() => {
                this.elapsedTime = Date.now() - this.startTime;
                this.display();
            }, 100);
            this.running = true;
        }
    }

    stop() {
        if (this.running) {
            clearInterval(this.interval);
            this.running = false;
        }
    }

    reset() {
        this.stop();
        this.elapsedTime = 0;
        this.display();
    }

    display() {
        const time = new Date(this.elapsedTime);
        const minutes = String(time.getUTCMinutes()).padStart(2, '0');
        const seconds = String(time.getUTCSeconds()).padStart(2, '0');
        const milliseconds = String(time.getUTCMilliseconds()).padStart(3, '0').slice(0, 2);
        document.getElementById('stopwatch-display').innerText = `${minutes}:${seconds}.${milliseconds}`;
    }
}

export default Stopwatch;