declare module "@ecmal/node/tty" {
    import {Buffer} from "@ecmal/node/buffer";
    import {Socket} from "@ecmal/node/net";

    export function isatty(fd: number): boolean;
    export interface ReadStream extends Socket {
        isRaw: boolean;
        setRawMode(mode: boolean): void;
        isTTY: boolean;
    }
    export interface WriteStream extends Socket {
        columns: number;
        rows: number;
        isTTY: boolean;
    }
}