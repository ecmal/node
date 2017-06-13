
import { Buffer } from "./buffer";
import { Interface } from "./readline";
import { Readable, Writable } from "./stream";
import { EventEmitter, EmitterEvents } from "./events";


export type REPLEvents = Interface & {
    exit();
    reset();
}

export interface ReplOptions {
    prompt?: string;
    input?: Readable;
    output?: Writable;
    terminal?: boolean;
    eval?: Function;
    useColors?: boolean;
    useGlobal?: boolean;
    ignoreUndefined?: boolean;
    writer?: Function;
    completer?: Function;
    replMode?: any;
    breakEvalOnSigint?: any;
}

export declare class REPLServer extends Interface {
    defineCommand(keyword: string, cmd: Function | { help: string, action: Function }): void;
    displayPrompt(preserveCursor?: boolean): void;
}

export declare function start(options: ReplOptions): REPLServer;

Object.assign(module.exports, require('repl'));