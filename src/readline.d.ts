///<reference path="index.d.ts"/>
import * as events from "node/events";
import * as stream from "node/stream";

export interface ReadLine extends events.EventEmitter {
    setPrompt(prompt: string): void;
    prompt(preserveCursor?: boolean): void;
    question(query: string, callback: Function): void;
    pause(): void;
    resume(): void;
    close(): void;
    write(data: any, key?: any): void;
}
export interface ReadLineOptions {
    input: NodeJS.ReadableStream;
    output: NodeJS.WritableStream;
    completer?: Function;
    terminal?: boolean;
}
export function createInterface(options: ReadLineOptions): ReadLine;