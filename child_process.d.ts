declare module "@ecmal/node/child_process" {
    import {Buffer} from "@ecmal/node/buffer";
    import {BufferEncoding}  from "@ecmal/node/buffer";
    import {EventEmitter}    from "@ecmal/node/events";
    import {EmitterEvents}   from "@ecmal/node/events";
    import {Writable} from "@ecmal/node/stream";
    import {Readable} from "@ecmal/node/stream";
    import {Socket} from "@ecmal/node/net";
    import {Server} from "@ecmal/node/net";

    export type ChildProcessEvents = EmitterEvents & {
        disconnet():void
        close(code: number, signal: string):void
        exit(code: number, signal: string):void
        message(message: any, sendHandle: Socket | Server):void;
    }
    export interface SpawnOptions {
        cwd?: string;
        env?: any;
        stdio?: any;
        detached?: boolean;
        uid?: number;
        gid?: number;
        shell?: boolean | string;
    }
    export interface ExecOptions {
        cwd?: string;
        env?: any;
        shell?: string;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        uid?: number;
        gid?: number;
    }
    export interface ExecOptionsWithStringEncoding extends ExecOptions {
        encoding: BufferEncoding;
    }
    export interface ExecOptionsWithBufferEncoding extends ExecOptions {
        encoding: string; // specify `null`.
    }
    export interface ExecFileOptions {
        cwd?: string;
        env?: any;
        timeout?: number;
        maxBuffer?: number;
        killSignal?: string;
        uid?: number;
        gid?: number;
    }
    export interface ExecFileOptionsWithStringEncoding extends ExecFileOptions {
        encoding: BufferEncoding;
    }
    export interface ExecFileOptionsWithBufferEncoding extends ExecFileOptions {
        encoding: string; // specify `null`.
    }
    export interface ForkOptions {
        cwd?: string;
        env?: any;
        execPath?: string;
        execArgv?: string[];
        silent?: boolean;
        uid?: number;
        gid?: number;
    }
    export interface SpawnSyncOptions {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        killSignal?: string;
        maxBuffer?: number;
        encoding?: string;
        shell?: boolean | string;
    }
    export interface SpawnSyncOptionsWithStringEncoding extends SpawnSyncOptions {
        encoding: BufferEncoding;
    }
    export interface SpawnSyncOptionsWithBufferEncoding extends SpawnSyncOptions {
        encoding: string; // specify `null`.
    }
    export interface SpawnSyncReturns<T> {
        pid: number;
        output: string[];
        stdout: T;
        stderr: T;
        status: number;
        signal: string;
        error: Error;
    }
    export interface ExecSyncOptions {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        shell?: string;
        uid?: number;
        gid?: number;
        timeout?: number;
        killSignal?: string;
        maxBuffer?: number;
        encoding?: string;
    }
    export interface ExecSyncOptionsWithStringEncoding extends ExecSyncOptions {
        encoding: BufferEncoding;
    }
    export interface ExecSyncOptionsWithBufferEncoding extends ExecSyncOptions {
        encoding: string; // specify `null`.
    }
    export interface ExecFileSyncOptions {
        cwd?: string;
        input?: string | Buffer;
        stdio?: any;
        env?: any;
        uid?: number;
        gid?: number;
        timeout?: number;
        killSignal?: string;
        maxBuffer?: number;
        encoding?: string;
    }
    export interface ExecFileSyncOptionsWithStringEncoding extends ExecFileSyncOptions {
        encoding: BufferEncoding;
    }
    export interface ExecFileSyncOptionsWithBufferEncoding extends ExecFileSyncOptions {
        encoding: string; // specify `null`.
    }

    export class ChildProcess extends EventEmitter {
        stdin: Writable;
        stdout: Readable;
        stderr: Readable;
        stdio: [Writable, Readable, Readable];
        pid: number;
        connected: boolean;
        kill(signal?: string): void;
        send(message: any, sendHandle?: any): boolean;
        disconnect(): void;
        unref(): void;
        ref(): void;
    }
   
    export function spawn(command: string, args?: string[], options?: SpawnOptions): ChildProcess;
    // 
    export function exec(command: string, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
    export function exec(command: string, options: ExecOptionsWithStringEncoding, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
    // usage. child_process.exec("tsc", {encoding: null as string}, (err, stdout, stderr) => {});
    export function exec(command: string, options: ExecOptionsWithBufferEncoding, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
    export function exec(command: string, options: ExecOptions, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;

    
    export function execFile(file: string, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
    export function execFile(file: string, options?: ExecFileOptionsWithStringEncoding, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
    // usage. child_process.execFile("file.sh", {encoding: null as string}, (err, stdout, stderr) => {});
    export function execFile(file: string, options?: ExecFileOptionsWithBufferEncoding, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
    export function execFile(file: string, options?: ExecFileOptions, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
    export function execFile(file: string, args?: string[], callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
    export function execFile(file: string, args?: string[], options?: ExecFileOptionsWithStringEncoding, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;
    // usage. child_process.execFile("file.sh", ["foo"], {encoding: null as string}, (err, stdout, stderr) => {});
    export function execFile(file: string, args?: string[], options?: ExecFileOptionsWithBufferEncoding, callback?: (error: Error, stdout: Buffer, stderr: Buffer) => void): ChildProcess;
    export function execFile(file: string, args?: string[], options?: ExecFileOptions, callback?: (error: Error, stdout: string, stderr: string) => void): ChildProcess;

    
    export function fork(modulePath: string, args?: string[], options?: ForkOptions): ChildProcess;
    
    export function spawnSync(command: string): SpawnSyncReturns<Buffer>;
    export function spawnSync(command: string, options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    export function spawnSync(command: string, options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    export function spawnSync(command: string, options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
    export function spawnSync(command: string, args?: string[], options?: SpawnSyncOptionsWithStringEncoding): SpawnSyncReturns<string>;
    export function spawnSync(command: string, args?: string[], options?: SpawnSyncOptionsWithBufferEncoding): SpawnSyncReturns<Buffer>;
    export function spawnSync(command: string, args?: string[], options?: SpawnSyncOptions): SpawnSyncReturns<Buffer>;
    
    export function execSync(command: string): Buffer;
    export function execSync(command: string, options?: ExecSyncOptionsWithStringEncoding): string;
    export function execSync(command: string, options?: ExecSyncOptionsWithBufferEncoding): Buffer;
    export function execSync(command: string, options?: ExecSyncOptions): Buffer;

    
    export function execFileSync(command: string): Buffer;
    export function execFileSync(command: string, options?: ExecFileSyncOptionsWithStringEncoding): string;
    export function execFileSync(command: string, options?: ExecFileSyncOptionsWithBufferEncoding): Buffer;
    export function execFileSync(command: string, options?: ExecFileSyncOptions): Buffer;
    export function execFileSync(command: string, args?: string[], options?: ExecFileSyncOptionsWithStringEncoding): string;
    export function execFileSync(command: string, args?: string[], options?: ExecFileSyncOptionsWithBufferEncoding): Buffer;
    export function execFileSync(command: string, args?: string[], options?: ExecFileSyncOptions): Buffer;

}