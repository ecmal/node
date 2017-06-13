import { EventEmitter, EmitterEvents } from "./events";
import { Buffer } from "./buffer";
import { Readable, ReadableEvents, Writable, WritableEvents } from "./stream";


export type ReadLineEvents = EmitterEvents & {
    close();
    line(input: any);
    pause();
    resume();
    SIGCONT();
    SIGINT();
    SIGTSTP();
}
export interface Key {
    sequence?: string;
    name?: string;
    ctrl?: boolean;
    meta?: boolean;
    shift?: boolean;
}
export declare class Interface extends EventEmitter {
    events: ReadLineEvents;
    setPrompt(prompt: string): void;
    prompt(preserveCursor?: boolean): void;
    question(query: string, callback: (answer: string) => void): void;
    pause(): this;
    resume(): this;
    close(): void;
    write(data: string | Buffer, key?: Key): void;
}
export interface Completer {
    (line: string): CompleterResult;
    (line: string, callback: (err: any, result: CompleterResult) => void): any;
}

export type CompleterResult = [string[], string];

export interface ReadLineOptions {
    input: Readable;
    output?: Writable;
    completer?: Completer;
    terminal?: boolean;
    historySize?: number;
}

export declare function createInterface(input: Readable, output?: Writable, completer?: Completer, terminal?: boolean): Interface;
export declare function createInterface(options: ReadLineOptions): Interface;

export declare function cursorTo(stream: Writable, x: number, y: number): void;
export declare function moveCursor(stream: Writable, dx: number | string, dy: number | string): void;
export declare function clearLine(stream: Writable, dir: number): void;
export declare function clearScreenDown(stream: Writable): void;



 Object.assign(module.exports, require('readline'));