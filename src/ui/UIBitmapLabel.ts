import { UIBitmap } from './UIBitmap';

export class UIBitmapLabel extends UIBitmap {

	public draw(c: HTMLCanvasElement): void {
		super.draw(c);
        
        if(this.isBitmapLoaded) {
            const context = c.getContext('2d');
            if(this.invertedPositioning) {
                const x = this.canvasWidth - this.x-  this.bitmapWidth;
                const y = this.canvasHeight - this.y - this.bitmapHeight;
                context.drawImage(this.bitmap, x, y);
            }
            else {
                context.drawImage(this.bitmap, this.x, this.y);
            }
        }
	}
}