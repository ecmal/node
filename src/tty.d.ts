///<reference path="index.d.ts"/>
import * as net from "node/net";

export function isatty(fd: number): boolean;
export interface ReadStream extends net.Socket {
    isRaw: boolean;
    setRawMode(mode: boolean): void;
}
export interface WriteStream extends net.Socket {
    columns: number;
    rows: number;
}