export class SharedPreferences {
    static getFloat(key: string, defaultValue: number): number {
        const value = localStorage.getItem(key);
        return value === null ? defaultValue : parseFloat(value);
    }

    static getInt(key: string, defaultValue: number): number {
        const value = localStorage.getItem(key);
        return value === null ? defaultValue : parseInt(value, 10);
    }

    static getString(key: string, defaultValue: string): string {
        const value = localStorage.getItem(key);
        return value === null ? defaultValue : value;        
    }
}