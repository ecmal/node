
import { Buffer } from "./buffer";
import { EventEmitter, EmitterEvents } from "./events";


export type Chunk = string | Buffer;
export type ReadableEvents = EmitterEvents & {
    readable(): void
    end(): void
    close(): void
    data(chunk: Chunk): void
    error(chunk: Error): void
}
export type WritableEvents = EmitterEvents & {
    close(): void;
    drain(): void;
    finish(): void;
    error(chunk: Error): void;
    pipe(src: Readable): void;
    unpipe(src: Readable): void;
}
export type DuplexEvents = ReadableEvents & WritableEvents
export interface ReadableOptions {
    highWaterMark?: number;
    encoding?: string;
    objectMode?: boolean;
    read?: (size?: number) => any;
}
export interface WritableOptions {
    highWaterMark?: number;
    decodeStrings?: boolean;
    objectMode?: boolean;
    write?: (chunk: Chunk, encoding: string, callback: Function) => any;
    writev?: (chunks: { chunk: Chunk, encoding: string }[], callback: Function) => any;
}
export interface DuplexOptions extends ReadableOptions, WritableOptions {
    allowHalfOpen?: boolean;
    readableObjectMode?: boolean;
    writableObjectMode?: boolean;
}
export interface TransformOptions extends DuplexOptions {
    transform?: (chunk: Chunk, encoding: string, callback: Function) => any;
    flush?: (callback: Function) => any;
}
export declare class Readable extends EventEmitter {
    events: ReadableEvents;
    read(size?: number): Chunk
    setEncoding(encoding: string): this
    pause(): this;
    resume(): this;
    isPaused(): boolean;
    pipe<T extends Writable>(destination: T, options?: { end?: boolean; }): T;
    unpipe<T extends Writable>(destination?: T): this
    unshift(chunk: Chunk): void
    wrap<T extends Readable>(oldStream: T): T
    constructor(opts?: ReadableOptions);
    readable: boolean;
    _read(size: number): void;
}
export declare class Writable extends EventEmitter {
    events: WritableEvents;
    constructor(opts?: WritableOptions);
    write(chunk: Chunk, cb?: Function): boolean;
    write(chunk: Chunk, encoding?: string, cb?: Function): boolean;
    end(chunk?: Chunk, cb?: Function): void;
    end(chunk?: Chunk, encoding?: string, cb?: Function): void;

    cork(): void;
    uncork(): void;
    writable: boolean;
    _write(chunk: Chunk, encoding: string, callback: Function): void;
    _writev(chunks: { chunk: Chunk, encoding: string }[], callback: Function);
}
// Note: Duplex extends both Readable and Writable.
export declare class Duplex extends Readable implements Writable {
    events: DuplexEvents;
    constructor(opts?: DuplexOptions);
    // Readable
    pause(): this;
    resume(): this;
    write(chunk: Chunk, cb?: Function): boolean;
    write(chunk: Chunk, encoding?: string, cb?: Function): boolean;
    cork(): void;
    uncork(): void;
    end(): void;
    end(chunk: Chunk, cb?: Function): void;
    end(chunk: Chunk, encoding?: string, cb?: Function): void;
    readable: boolean;
    writable: boolean;
    _read(size: number): void;
    _write(chunk: any, encoding: string, callback: Function): void;
    _writev(chunks: { chunk: Chunk, encoding: string }[], callback: Function);
}
// Note: Transform lacks the _read and _write methods of Readable/Writable.
export declare class Transform extends Duplex {
    constructor(opts?: TransformOptions);
    _transform(chunk: any, encoding: string, callback: Function): void;
    _flush(callback: Function): void;
}
export declare class PassThrough extends Transform { }

const binding = require('stream');
Object.assign(module.exports, {
    Readable: binding.Readable,
    Writable: binding.Writable,
    Duplex: binding.Duplex,
    Transform: binding.Transform,
    PassThrough: binding.PassThrough
});