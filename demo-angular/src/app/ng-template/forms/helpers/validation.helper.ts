
export class ValidationHelper {
    public static required(value: string): any {
        return value === null || value === '' || value === undefined;
    }
    public static empty(value: any[]): any {
        return value.length === 0;
    }
    public static min(value: string, min: number): any {
        return parseFloat(value) < min;
    }
    public static email(value: string): any {
        return true;
    }
}
