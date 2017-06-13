
import { Buffer } from "./buffer";
import { Socket } from "./net";

export declare function isatty(fd: number): boolean;
export declare class ReadStream extends Socket {
    isRaw: boolean;
    setRawMode(mode: boolean): void;
    isTTY: boolean;
}
export declare class WriteStream extends Socket {
    columns: number;
    rows: number;
    isTTY: boolean;
}

Object.assign(module.exports, require('tty'));