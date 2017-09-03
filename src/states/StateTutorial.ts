import { NamedColor } from '../NamedColor';
import { State } from './State';
import { StateContext } from './StateContext';
import { StatePlay } from './StatePlay';
import { UIButton, UIElement, UILabel } from '../ui';

export class StateTutorial extends State {
    private buttonPlay: UIButton;
    private buttonBack: UIButton;
    private dummyColorName: UILabel;
    private buttonLeft: UIButton;
    private buttonRight: UIButton;

    constructor(sc: StateContext) {
        super(sc);

        this.labels.push(new UILabel("HOW TO PLAY?", UIElement.MODEL_WIDTH / 2, 100, UILabel.SIZE_LARGE));

        const goodColor: NamedColor = StatePlay.colors[2];
        const wrongColor: NamedColor = StatePlay.colors[3];

        this.dummyColorName = new UILabel(goodColor.name, UIElement.MODEL_WIDTH / 2, 200, UILabel.SIZE_LARGE);
        this.dummyColorName.foregroundColor = wrongColor.value;
        this.labels.push(this.dummyColorName);

        this.buttonLeft = new UIButton("\u2714", 60, 250, UIButton.SIZE_SQUARE_MEDIUM, goodColor.value);
        this.buttons.push(this.buttonLeft);

        this.buttonRight = new UIButton("\u2718", 900, 250, UIButton.SIZE_SQUARE_MEDIUM, wrongColor.value);
        this.buttons.push(this.buttonRight);

        this.buttonPlay = new UIButton("Play", (UIElement.MODEL_WIDTH - UIButton.SIZE_MEDIUM.right) / 2, 530, UIButton.SIZE_MEDIUM, UIButton.COLOR_PRIMARY);
        this.buttons.push(this.buttonPlay);
    }

    public draw(canvas: HTMLCanvasElement): void {
        const context = canvas.getContext('2d');
        context.fillStyle = '#000';
        context.fillRect(0, 0, canvas.width, canvas.height);

        super.draw(canvas);
    }

    public onDown(x: number, y: number): void {
        const tappedButton: UIElement = this.determineTapTarget(x, y);

        if (tappedButton === this.buttonPlay) {
            this.stateContext.state = new StatePlay(this.stateContext);
        }
    }

    public tick(): void { }
}