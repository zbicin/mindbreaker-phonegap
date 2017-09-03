import { GameView } from './GameView';

const FPS = 20;
const ticksPerSecond = 1000 / FPS;

export class GameLoop {
    private isRunning: boolean;
    private gameView: GameView;

    constructor(gameView: GameView) {
        this.gameView = gameView;
        this.isRunning = false;
    }

    public setRunning(newValue: boolean) {
        this.isRunning = newValue;
    }

    public run() {
        let startTime: number;
        let sleepTime: number;

        if(this.isRunning) {
            this.gameView.handleTouchScreen();
            this.gameView.tick();
            startTime = new Date().getTime();

            this.gameView.onDraw(this.gameView.canvas);

            sleepTime = ticksPerSecond - (new Date().getTime() - startTime);
            if(sleepTime > 0) {
                setTimeout(() => this.run(), sleepTime);
            } else {
                setTimeout(() => this.run(), 10);
            }
        }
    }

    public start(): void {
        this.setRunning(true);
        this.run();
    }
}