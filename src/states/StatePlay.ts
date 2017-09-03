import { NamedColor } from '../NamedColor';
import { Random } from '../Random';
import { State } from './State';
import { StateContext } from './StateContext';
import { StateGameOver } from './StateGameOver';
import { StatePause } from './StatePause';
import { UILabel, UIElement, UIButton } from '../ui';

export class StatePlay extends State {
    static colors: Array<NamedColor> = [
        new NamedColor('White', '#000'),
        new NamedColor('Blue', '#2673EC'),
        new NamedColor('Green', '#78BA00'),
        new NamedColor('Red', '#FF1111'),
        new NamedColor('Yellow', '#F4EE00'),
        new NamedColor('Purple', '#7200AC'),
        new NamedColor('Pink', '#FF76BC'),
        new NamedColor('Orange', '#FF7D23')
    ];

    private buttonPause: UIButton;
    private labelScore: UILabel;
    private labelTime: UILabel;
    private buttonRight: UIButton;
    private buttonLeft: UIButton;
    private colorsCount: number;
    public properColor: NamedColor;
    public labelColorName: UILabel;
    public score: number;
    public countdown: number;

    public leftColor: NamedColor;
    public rightColor: NamedColor;

    static restore(sc: StateContext, score: number, countdown: number, leftColorValue: string, rightColorValue: string, properColorName: string, properColorValue: string): StatePlay {
        const result = new StatePlay(sc);

        result.score = score;
        result.countdown = countdown;

        result.leftColor = new NamedColor('', leftColorValue);
        result.rightColor = new NamedColor('', rightColorValue);
        result.properColor = new NamedColor(properColorName, properColorValue);

        result.labelScore.label = `${score} pts`;
        result.labelTime.label = countdown.toString();

        result.labelColorName.label = properColorName;
        result.labelColorName.foregroundColor = properColorValue;
        result.buttonLeft.backgroundColor = result.leftColor.value;
        result.buttonRight.backgroundColor = result.rightColor.value;

        return result;
    }

    constructor(sc: StateContext) {
        super(sc);

        this.score = 0;
        this.countdown = 10;

        this.buttonPause = new UIButton('Pause', 60, 60, UIButton.SIZE_MEDIUM, UIButton.COLOR_SECONDARY);
        this.buttons.push(this.buttonPause);

        this.buttonLeft = new UIButton('', 60, 200, UIButton.SIZE_SQUARE_MEDIUM, UIButton.COLOR_TRANSPARENT);
        this.buttons.push(this.buttonLeft);

        this.buttonRight = new UIButton('', 900, 200, UIButton.SIZE_SQUARE_MEDIUM, UIButton.COLOR_TRANSPARENT);
        this.buttons.push(this.buttonRight);

        this.labelScore = new UILabel(`${this.score} pts`, UIElement.MODEL_WIDTH / 2, 560, UILabel.SIZE_MEDIUM);
        this.labels.push(this.labelScore);

        this.labelTime = new UILabel(this.countdown.toString(), UIElement.MODEL_WIDTH / 2, UIElement.MODEL_HEIGHT / 2, UILabel.SIZE_LARGE);
        this.labels.push(this.labelTime);

        this.labelColorName = new UILabel('', UIElement.MODEL_WIDTH / 2, 100, UILabel.SIZE_LARGE);
        this.labels.push(this.labelColorName);

        this.colorsCount = StatePlay.colors.length;

        this.generateQuestion();
    }

    private generateQuestion(): void {
        this.leftColor = StatePlay.colors[Random.nextInt(this.colorsCount)];
        do {
            this.rightColor = StatePlay.colors[Random.nextInt(this.colorsCount)];
        } while (this.rightColor === this.leftColor);

        this.buttonLeft.backgroundColor = this.leftColor.value;
        this.buttonRight.backgroundColor = this.rightColor.value;

        this.properColor = Random.nextBoolean() ? this.leftColor : this.rightColor;
        this.labelColorName.label = this.properColor.name;

        this.labelColorName.foregroundColor = Random.nextBoolean() ? this.leftColor.value : this.rightColor.value;
    }

    public onDown(x: number, y: number): void {
        const tappedButton: UIElement = this.determineTapTarget(x, y);
        if (tappedButton === this.buttonLeft || tappedButton === this.buttonRight) {
            if ((tappedButton as UIButton).backgroundColor === this.properColor.value) {

                if (this.countdown < 9) this.countdown += 1;
                else this.countdown = 10;

                this.score += 10;
                this.labelScore.label = `${this.score} pts`;

                this.generateQuestion();
            }
            else {
                this.stateContext.state = new StateGameOver(this.stateContext, this.score, this.countdown);
            }
        }
        else if (tappedButton === this.buttonPause) {
            this.stateContext.state = new StatePause(this.stateContext, this);
        }
    }

    public tick(): void {
        this.countdown -= 0.05;
        if (this.countdown <= 0) {
            this.stateContext.state = new StateGameOver(this.stateContext, this.score, this.countdown);
        } else {
            this.labelTime.label = (Math.round(this.countdown * 10) / 10.0).toString();
        }
    }
}