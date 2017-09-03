import { Paint } from './Paint';
import { Rect } from './Rect';
import { UIElement } from './UIElement';

export class UIButton extends UIElement {
    public static SIZE_MEDIUM: Rect = new Rect(0, 0, 225, 120);
    public static SIZE_LARGE: Rect = new Rect(0, 0, 300, 160);
    public static SIZE_SQUARE_MEDIUM: Rect = new Rect(0, 0, 225, 255);

    public static COLOR_PRIMARY: string = '#00b9e9';
    public static COLOR_SECONDARY: string = '#4b717b';
    public static COLOR_TRANSPARENT: string = 'rgba(0,0,0,0)';

    public left: number;
    public right: number;
    public bottom: number;
    public top: number;
    public backgroundColor: string;

    private size: Rect;
    private paintBackground: Paint;
    private paintUnderline: Paint;
    private underlineThickness: number;

    constructor(text: string, x: number, y: number, size: Rect, backgroundColor: string) {
        super();

        this.label = text.toUpperCase();
        this.x = x;
        this.y = y;
        this.size = size;

        this.left = -1;
        this.right = -1;
        this.top = -1;
        this.bottom = -1;

        this.foregroundColor = '#FFFFFF';
        this.backgroundColor = backgroundColor;


        this.paintText = new Paint();
        this.paintText.color = this.foregroundColor;
        this.paintText.textAlign = 'center';
        this.paintText.isBoldText = true;
        this.paintText.textShadowColor = 'rgba(0, 0, 0, 0.4)';

        this.paintBackground = new Paint();
        this.paintBackground.color = this.backgroundColor;

        const underlineColor = this.shadeColor(this.backgroundColor, 0.6);
        this.paintUnderline = new Paint();
        this.paintUnderline.color = underlineColor;
    }

    public recalculatePosition(c: HTMLCanvasElement): void {
        const canvasWidth = c.width;
        const canvasHeight = c.height;

        this.verticalScale = canvasHeight / UIElement.MODEL_HEIGHT;
        this.horizontalScale = canvasWidth / UIElement.MODEL_WIDTH;

        this.left = (this.x * this.horizontalScale);
        this.right = (this.x * this.horizontalScale) + this.size.right * this.horizontalScale;

        this.top = (this.y * this.verticalScale);
        this.bottom = (this.y * this.verticalScale) + this.size.bottom * this.verticalScale;

        this.paintText.textSize = this.size.bottom * this.verticalScale * 0.35;
        this.paintText.textShadowSize = 6 * this.verticalScale;

        this.textY = (this.top + this.bottom) / 2;// - ((paintText.descent() + paintText.ascent()) / 2);
        this.textX = (this.left + this.right) / 2;

        this.underlineThickness = 10 * this.verticalScale;

    }

    public draw(c: HTMLCanvasElement): void {
        if (this.left === -1) {
            this.recalculatePosition(c);
        }

        this.paintBackground.color = this.backgroundColor;

        const context = c.getContext('2d');
        context.fillStyle = this.paintBackground.color;
        context.fillRect(this.left, this.top, this.right, this.bottom);

        context.fillStyle = this.paintUnderline.color;
        context.fillRect(this.left, this.bottom - this.underlineThickness, this.right, this.bottom);

        context.font = `${this.paintText.textSize.toString}px ${this.paintText.isBoldText ? 'bold' : 'normal'}`;
        context.shadowColor = this.paintText.textShadowColor;
        context.shadowBlur = this.paintText.textShadowSize;
        context.fillStyle = this.paintText.color;
        context.fillText(this.label, this.textX, this.textY);

    }

    public isAtPoint(x: number, y: number): boolean {
        return x >= this.left
            && x <= this.right
            && y >= this.top
            && y <= this.bottom;
    }

    private shadeColor(color: string, percent: number): string {
        var f = parseInt(color.slice(1), 16), t = percent < 0 ? 0 : 255, p = percent < 0 ? percent * -1 : percent, R = f >> 16, G = f >> 8 & 0x00FF, B = f & 0x0000FF;
        return "#" + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 + (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
    }
}