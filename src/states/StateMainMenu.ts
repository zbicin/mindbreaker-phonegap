import { State } from './State';
import { StateAbout } from './StateAbout';
import { StateContext } from './StateContext';
import { StateTutorial } from './StateTutorial';
import { UIButton, UIElement, UILabel } from '../ui';

export class StateMainMenu extends State {
    private buttonAbout: UIButton;
    private buttonPlay: UIButton;

    constructor(sc: StateContext) {
        super(sc);

        this.labels.push(new UILabel('MINDBREAKER', 1176 / 2, 160, UILabel.SIZE_LARGE));

        this.buttonPlay = new UIButton('Play', 438, 250, UIButton.SIZE_LARGE, UIButton.COLOR_PRIMARY);
        this.buttons.push(this.buttonPlay);

        this.buttonAbout = new UIButton('About', 475, 500, UIButton.SIZE_MEDIUM, UIButton.COLOR_SECONDARY);
        this.buttons.push(this.buttonAbout);
    }

    public onDown(x: number, y: number): void {
        const tappedButton: UIElement = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonPlay) {
            this.stateContext.state = new StateTutorial(this.stateContext);
        }
        else if (tappedButton === this.buttonAbout) {
            this.stateContext.state = new StateAbout(this.stateContext);
        }
    }

    public tick(): void { }
}