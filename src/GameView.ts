import { Enums } from './Enums';
import { GameLoop } from './GameLoop';
import { Main } from './Main';
import { MyMotionEvent } from './MyMotionEvent';

export class GameView {

    public canvas: HTMLCanvasElement;
    public events: Array<MyMotionEvent>;
    public gameLoop: GameLoop;
    public parent: Main;

    constructor(main: Main) {
        this.canvas = document.createElement('canvas');
        this.canvas.height = window.innerHeight;
        this.canvas.width = window.innerWidth;
        this.events = new Array<MyMotionEvent>();
        this.parent = main;
    }

    public handleTouchScreen() {
        while(this.events.length > 0) {
            const event = this.events.pop();
            if(event.action === Enums.Actions.TouchEnd) {
                this.parent.stateContext.state.onUp(event.x, event.y);
            } else if(event.action === Enums.Actions.TouchStart) {
                this.parent.stateContext.state.onDown(event.x, event.y);
            }
        }
    }

    public onCreated() {
        this.gameLoop = new GameLoop(this);
        this.gameLoop.setRunning(true);
        this.gameLoop.start();
    }

    public onDestroyed() {
        let retry = true;
        this.gameLoop.setRunning(false);
        this.gameLoop = null;
    }

    public onDraw(canvas: HTMLCanvasElement) {
        this.parent.stateContext.state.draw(canvas);
    }

    public onTouchStart(e: TouchEvent) {
        const touch = e.touches[0];
        this.events.push(new MyMotionEvent(touch.clientX, touch.clientY, Enums.Actions.TouchStart));
    }

    public onTouchEnd(e: TouchEvent) {
        const touch = e.touches[0];
        this.events.push(new MyMotionEvent(touch.clientX, touch.clientY, Enums.Actions.TouchEnd));
    }

    public tick() {
        this.parent.stateContext.state.tick();
    }
}