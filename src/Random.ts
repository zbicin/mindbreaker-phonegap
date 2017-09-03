export class Random {
    public static nextBoolean(): boolean {
        return Random.nextInt(1) ? true : false;
    }
    public static nextInt(maxValue: number): number {
        return Math.floor((Math.random() * maxValue));
    }
}