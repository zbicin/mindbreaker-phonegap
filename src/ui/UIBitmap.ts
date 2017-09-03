import { UIElement } from './UIElement';
import { Paint } from './Paint';

export abstract class UIBitmap extends UIElement {
    protected invertedPositioning: boolean;
	protected scale: number;
	// protected Options options;
	protected bitmap: HTMLImageElement;
    protected paint: Paint;
    protected isBitmapLoaded: boolean;
	protected bitmapWidth: number;
	protected bitmapHeight: number;
	protected canvasWidth: number;
	protected canvasHeight: number;
	
	constructor(imagePath: string, canvas: HTMLCanvasElement, x: number, y: number) {
        super();
	
		const verticalScale = canvas.height / UIElement.MODEL_HEIGHT;
		const horizontalScale = canvas.width / UIElement.MODEL_WIDTH;
		
		this.scale = verticalScale < horizontalScale ? verticalScale : horizontalScale;
		
		this.x = horizontalScale * x;
		this.y = verticalScale * y;
		
		console.log("SCALE", "scale: " + this.scale + " hScale: " + this.horizontalScale + " vScale: " + this.verticalScale);
		
		this.invertedPositioning = this.x < 0;
		if(this.invertedPositioning) {
			this.x *= -1;
			this.y *= -1;
		}
		
		// options = new BitmapFactory.Options();
		// options.inDensity = 1280;
		// options.inTargetDensity = displayMetrics.widthPixels;
                
        this.isBitmapLoaded = false;
        this.bitmap = new Image();
        this.bitmap.onload = () => {
            this.isBitmapLoaded = true;
            this.bitmapHeight = this.bitmap.height;
            this.bitmapWidth = this.bitmap.width;
        };
		
		this.paint = new Paint();
	}

	public draw(canvas: HTMLCanvasElement): void {
		this.canvasWidth = canvas.width;
		this.canvasHeight = canvas.height;
	}
}