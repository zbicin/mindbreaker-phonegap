import { GameView } from './GameView';
import { SharedPreferences } from './SharedPreferences';
import { StateContext, StateMainMenu, StatePlay, StatePause } from './states';

export class Main {
    private gameView: GameView;
    public stateContext: StateContext;

    constructor() {
        this.onCreated();
    }

    public onCreated() {
        this.gameView = new GameView(this);
        this.stateContext = new StateContext(this, this.gameView);

        if(SharedPreferences.getInt('score', -1) > -1) {
            const statePlay = StatePlay.restore(this.stateContext,
                SharedPreferences.getInt('score', 0),
                SharedPreferences.getFloat('countdown', 10.0),
                SharedPreferences.getString('leftColorValue', StatePlay.colors[1].value),
                SharedPreferences.getString('rightColorValue', StatePlay.colors[2].value),
                SharedPreferences.getString('properColorName', StatePlay.colors[1].name),
                SharedPreferences.getString('properColorValue', StatePlay.colors[1].value)
            );

            const statePause = new StatePause(this.stateContext, statePlay);
            
            this.stateContext.state = statePause;
        } else {
            this.stateContext.state = new StateMainMenu(this.stateContext);
        }

        this.setContentView(this.gameView);
        this.gameView.onCreated();
    }

    public onPause(): void {
        console.log('Pause');
        if(this.gameView.gameLoop !== null) {
            this.gameView.gameLoop.setRunning(false);

            if(this.stateContext.state instanceof StatePlay) {
                this.stateContext.state = new StatePause(this.stateContext, this.stateContext.state as StatePlay);
            }
        }
    }

    public onStop(): void {
        console.log('Stop');

        if(this.stateContext.state instanceof StatePause) {
            const statePlay = (this.stateContext.state as StatePause).statePlay;

            // TODO
            // editor.putInt("score", statePlay.score);
			// editor.putFloat("countdown", statePlay.countdown);
			
			// editor.putInt("leftColorValue", statePlay.leftColor.value);
			// editor.putInt("rightColorValue", statePlay.rightColor.value);
			// editor.putString("properColorName", statePlay.properColor.name);
			// editor.putInt("properColorValue", statePlay.properColor.value);
        } else {
            // TODO
            //editor.clear();		
        }
    }

    public setContentView(gameView: GameView): void {
        for(let i = 0; i<document.body.children.length; i++) {
            const item = document.body.children.item(i);
            if(item.tagName !== 'script') {
                document.body.removeChild(item);
            }
        }

        document.body.appendChild(gameView.canvas);
    }
}

(<any>window).Main = Main;