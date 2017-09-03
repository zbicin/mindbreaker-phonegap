import { UIElement } from './UIElement';
import { Paint } from './Paint';

export class UILabel extends UIElement {
    public static SIZE_MEDIUM: number = 40;
    public static SIZE_LARGE: number = 80;

    private size: number;

    constructor(text: string, x: number, y: number, size: number) {
        super();
        this.label = text;
        this.x = x;
        this.y = y;
        this.size = size;

        this.foregroundColor = '#FFFFFF';

        this.paintText = new Paint();
        this.paintText.textAlign = 'center';
        this.paintText.isBoldText = true;

        this.textX = -1;
    }

    public recalculatePosition(c: HTMLCanvasElement): void {
        const canvasWidth = c.width;
        const canvasHeight = c.height;

        this.verticalScale = canvasHeight / 696.0;
        this.horizontalScale = canvasWidth / 1176.0;

        // TODO
        this.textY = (this.y * this.verticalScale); // - ((paintText.descent() + paintText.ascent()) / 2));
        this.textX = this.x * this.horizontalScale;

        this.paintText.textShadowColor = 'rgba(0,0,0,170)';
        this.paintText.textShadowSize = 15 * this.verticalScale;
    }

    public draw(c: HTMLCanvasElement): void {
        if (this.textX === -1) {
            this.recalculatePosition(c);
        }

        this.paintText.color = this.foregroundColor;

        const context = c.getContext('2d');
        context.fillStyle = this.paintText.color;
        context.fillText(this.label, this.textX, this.textY);
    }

}