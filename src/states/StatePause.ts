import { State } from './State';
import { StateContext } from './StateContext';
import { StateMainMenu } from './StateMainMenu';
import { StatePlay } from './StatePlay';
import { UIButton, UIElement, UILabel } from '../ui';

export class StatePause extends State {
    private buttonBack: UIButton;
    private buttonResume: UIButton;
    public statePlay: StatePlay;

    constructor(sc: StateContext, statePlay: StatePlay) {
        super(sc);

        this.labels.push(new UILabel('PAUSED', UIElement.MODEL_WIDTH / 2, 160, UILabel.SIZE_LARGE));

        this.buttonResume = new UIButton('RESUME', (UIElement.MODEL_WIDTH - UIButton.SIZE_MEDIUM.right) / 2, 250, UIButton.SIZE_MEDIUM, UIButton.COLOR_PRIMARY);
        this.buttons.push(this.buttonResume);

        this.buttonBack = new UIButton('MENU', (UIElement.MODEL_WIDTH - UIButton.SIZE_MEDIUM.right) / 2, 400, UIButton.SIZE_MEDIUM, UIButton.COLOR_SECONDARY);
        this.buttons.push(this.buttonBack);

        this.statePlay = statePlay;
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
        else if (tappedButton === this.buttonResume) {
            this.stateContext.state = this.statePlay;
        }
    }

    public tick(): void { }
}