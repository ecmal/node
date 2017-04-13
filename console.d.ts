declare module "@ecmal/node/console" {
    import {Writable} from "@ecmal/node/stream";
    export class Console {
        constructor(stdout: Writable, stderr?: Writable);
        assert(value: any, message?: string, ...optionalParams: any[]): void;
        dir(obj: any, options?: {showHidden?: boolean, depth?: number, colors?: boolean}): void;
        error(message?: any, ...optionalParams: any[]): void;
        info(message?: any, ...optionalParams: any[]): void;
        log(message?: any, ...optionalParams: any[]): void;
        time(label: string): void;
        timeEnd(label: string): void;
        trace(message?: any, ...optionalParams: any[]): void;
        warn(message?: any, ...optionalParams: any[]): void;
    }
}