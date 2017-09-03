import { State } from './State';
import { StateContext } from './StateContext';
import { StateMainMenu } from './StateMainMenu';
import { UIButton, UIElement, UILabel } from '../ui';

export class StateAbout extends State {
    private buttonBack: UIButton;

    constructor(sc: StateContext) {
        super(sc);

        this.labels.push(new UILabel('ABOUT', UIElement.MODEL_WIDTH / 2, 160, UILabel.SIZE_LARGE));
        this.labels.push(new UILabel('Krzysztof Zbiciñski 171148', UIElement.MODEL_WIDTH / 2, 260, UILabel.SIZE_MEDIUM));
        this.labels.push(new UILabel('Information Technology, IFE', UIElement.MODEL_WIDTH / 2, 360, UILabel.SIZE_MEDIUM));

        this.buttonBack = new UIButton('Back', 475, 500, UIButton.SIZE_MEDIUM, UIButton.COLOR_SECONDARY);
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
    }

    public tick(): void { }
}