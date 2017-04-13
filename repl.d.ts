declare module "@ecmal/node/repl" {
    import {Buffer} from "@ecmal/node/buffer";
    import {Interface} from "@ecmal/node/readline";
    import {Readable,Writable} from "@ecmal/node/stream";
    import {EventEmitter,EmitterEvents} from "@ecmal/node/events";


    type REPLEvents = Interface & {
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

    export class REPLServer extends Interface {
        defineCommand(keyword: string, cmd: Function | { help: string, action: Function }): void;
        displayPrompt(preserveCursor?: boolean): void;
    }

    export function start(options: ReplOptions): REPLServer;
}