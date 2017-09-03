export class Rect {
    public left: number;
    public top: number;
    public right: number;
    public bottom: number;

    constructor(x: number, y: number, width: number, height: number) {
        this.left = x;
        this.top = y;
        this.right = width;
        this.bottom = height;
    }
}