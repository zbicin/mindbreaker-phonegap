import { Enums } from './Enums';

export class MyMotionEvent {
    public x: number;
    public y: number;
    public action: Enums.Actions;

    constructor(x: number, y: number, action: Enums.Actions) {
        this.x = x;
        this.y = y;
        this.action = action;
    }
}