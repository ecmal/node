declare module "@ecmal/node/timers" {
    export interface Timer {
        ref(): void;
        unref(): void;
    }
    export function setTimeout(callback: (...args: any[]) => void, ms: number, ...args: any[]): Timer;
    export function clearTimeout(timeoutId: Timer): void;
    export function setInterval(callback: (...args: any[]) => void, ms: number, ...args: any[]): Timer;
    export function clearInterval(intervalId: Timer): void;
    export function setImmediate(callback: (...args: any[]) => void, ...args: any[]): any;
    export function clearImmediate(immediateId: any): void;
}