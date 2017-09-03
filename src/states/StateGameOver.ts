import { State } from './State';
import { StateContext } from './StateContext';
import { StateMainMenu } from './StateMainMenu';
import { StatePlay } from './StatePlay';
import { UIButton, UIElement, UILabel } from '../ui';

export class StateGameOver extends State {
    private buttonAgain: UIButton;
    private buttonBack: UIButton;

    constructor(sc: StateContext, score: number, countdown: number) {
        super(sc);

        const reason = countdown > 0 ? 'GOTCHA!' : 'THE TIME HAS RUN OUT';

        this.labels.push(new UILabel(reason, UIElement.MODEL_WIDTH / 2, 160, UILabel.SIZE_LARGE));

        this.labels.push(new UILabel('Your score:', UIElement.MODEL_WIDTH / 2, 260, UILabel.SIZE_MEDIUM));
        this.labels.push(new UILabel(`${score} pts`, UIElement.MODEL_WIDTH / 2, 360, UILabel.SIZE_MEDIUM));

        this.buttonAgain = new UIButton('TRY AGAIN', 900, 530, UIButton.SIZE_MEDIUM, UIButton.COLOR_PRIMARY);
        this.buttons.push(this.buttonAgain);

        this.buttonBack = new UIButton('MENU', 60, 530, UIButton.SIZE_MEDIUM, UIButton.COLOR_SECONDARY);
        this.buttons.push(this.buttonBack);
    }

    public draw(canvas: HTMLCanvasElement): void {
        const context = canvas.getContext('2d');
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);

        super.draw(canvas);
    }

    public onDown(x: number, y: number): void {
        const tappedButton: UIElement = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonBack) {
            this.stateContext.state = new StateMainMenu(this.stateContext);
        }
        else if (tappedButton === this.buttonAgain) {
            this.stateContext.state = new StatePlay(this.stateContext);
        }
    }

    public tick(): void { }
}