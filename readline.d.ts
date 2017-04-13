declare module "@ecmal/node/readline" {

    import {EventEmitter,EmitterEvents} from "@ecmal/node/events";
    import {Buffer} from "@ecmal/node/buffer";
    import {Readable,ReadableEvents,Writable,WritableEvents} from "@ecmal/node/stream";


    type ReadLineEvents = EmitterEvents&{
        close();
        line(input:any);
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
    export class Interface extends EventEmitter {
        events:ReadLineEvents;
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

    export function createInterface(input: Readable, output?: Writable, completer?: Completer, terminal?: boolean): Interface;
    export function createInterface(options: ReadLineOptions): Interface;

    export function cursorTo(stream: Writable, x: number, y: number): void;
    export function moveCursor(stream: Writable, dx: number | string, dy: number | string): void;
    export function clearLine(stream: Writable, dir: number): void;
    export function clearScreenDown(stream: Writable): void;
}