import { StateContext } from './StateContext';
import { UILabel, UIButton, UIElement, UIBitmapLabel, UIBitmapButton } from '../ui';

export abstract class State {
    public bitmaps: Array<UIBitmapLabel>;
    public bitmapButtons: Array<UIBitmapButton>;
    public buttons: Array<UIButton>;
    public labels: Array<UILabel>;
    public stateContext: StateContext;

    private backgroundImage: HTMLImageElement;
    private isBackgroundImageLoaded: boolean;
    private startTime: number;

    constructor(sc: StateContext) {
        this.stateContext = sc;
        this.startTime = new Date().getTime();
        this.buttons = new Array<UIButton>();
        this.labels = new Array<UILabel>();
        this.bitmaps = new Array<UIBitmapLabel>();
        this.bitmapButtons = new Array<UIBitmapButton>();

        this.backgroundImage = new Image();
        this.isBackgroundImageLoaded = false;
        this.backgroundImage.onload = () => {
            this.isBackgroundImageLoaded = true;
        };
        // TODO set url
    }

    public abstract tick(): void;

    public draw(canvas: HTMLCanvasElement): void {
        const context = canvas.getContext('2d');
        if (this.isBackgroundImageLoaded) {
            for (let x = 0; x < canvas.width; x += this.backgroundImage.width) {
                for (let y = 0; y < canvas.height; y += this.backgroundImage.height) {
                    context.drawImage(this.backgroundImage, x, y, this.backgroundImage.width, this.backgroundImage.height);
                }
            }
        }

        this.labels.forEach((l) => l.draw(canvas));
        this.buttons.forEach((b) => b.draw(canvas));
        this.bitmaps.forEach((b) => b.draw(canvas));
        this.bitmapButtons.forEach((bb) => bb.draw(canvas));
    }

    public getTimeInCurrentState(): number {
        const result = new Date().getTime() - this.startTime;
        return result;
    }

    public onDown(x: number, y: number): void {
        console.log(`Unhandled tap x: ${x} y: ${y}`);
    }

    public onUp(x: number, y: number): void { }

    protected determineTapTarget(x: number, y: number): UIElement {
        let tappedButton: UIElement = null;

        tappedButton = this.buttons.filter((b) => b.isAtPoint(x, y))[0];
        tappedButton = this.bitmapButtons.filter((b) => b.isAtPoint(x, y))[0];

        return tappedButton ? tappedButton : null;
    }
}