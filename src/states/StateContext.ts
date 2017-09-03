import { GameView } from '../GameView';
import { Main } from '../Main';
import { State } from './State';

export class StateContext {
    public state: State;
	public parent: Main;
	public gameView: GameView;

	constructor(main: Main, gameView: GameView) {
		this.parent = main;
        this.gameView = gameView;
	}
}