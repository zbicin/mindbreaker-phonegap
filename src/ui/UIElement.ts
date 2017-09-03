import { Paint } from './Paint';

export abstract class UIElement {
    public static MODEL_WIDTH: number = 1176.0;
	public static MODEL_HEIGHT: number = 696.0;
	
	public label: string;
	public foregroundColor: string;
	protected verticalScale: number;
	protected horizontalScale: number;
	protected x: number;
	protected y: number;
	
	protected paintText: Paint;
	protected textY: number;
	protected textX: number;
	
	public abstract draw(canvas: HTMLCanvasElement): void;
}