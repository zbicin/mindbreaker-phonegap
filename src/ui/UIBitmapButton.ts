import {UIBitmap} from './UIBitmap';

export class UIBitmapButton extends UIBitmap {

	public draw(c:HTMLCanvasElement): void {
		super.draw(c);
        
        if(this.isBitmapLoaded) {
            const context = c.getContext('2d');
            
            if(this.invertedPositioning) {
                const x = this.canvasWidth - this.x - this.bitmapWidth;
                const y = this.canvasHeight - this.y - this.bitmapHeight;
                context.drawImage(this.bitmap, x, y);
            }
            else {
                context.drawImage(this.bitmap, this.x, this.y);
            }
        }
	}

	public isAtPoint(x: number, y: number): boolean {
		if(this.invertedPositioning) {
			return x <= this.canvasWidth - this.x
					&& x >= this.canvasWidth - this.x - this.bitmapWidth
					&& y <= this.canvasWidth - this.y
					&& y >= this.canvasWidth - this.y - this.bitmapHeight;
		}
		else {
			return x >= this.x
					&& x <= this.x + this.bitmapWidth
					&& y >= this.y
					&& y <= this.y + this.bitmapHeight;
		}
	}


}