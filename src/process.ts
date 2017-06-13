
import { EventEmitter, EmitterEvents } from "./events";
import { Buffer } from "./buffer";
import { Readable, Writable } from "./stream";
import { Socket, Server } from "./net";
import { Timer } from "./timers";

export type Platform = 'aix' | 'android' | 'darwin' | 'freebsd' | 'linux' | 'openbsd' | 'sunos' | 'win32';
export type ProcessEvents = EmitterEvents & {
    beforeExit();
    disconnect();
    exit(code: number);
    message(message: any, sendHandle: Socket | Server);
    warning(name: any, message: string, stack: string);
    rejectionHandled(reason: any, promise: Promise<any>);
    unhandledRejection(reason: any, promise: Promise<any>);
    uncaughtException(reason: Error);
}

export interface ProcessVersions {
    http_parser: string;
    node: string;
    v8: string;
    ares: string;
    uv: string;
    zlib: string;
    modules: string;
    openssl: string;
}
export interface ProcessTargetDefaults {
    cflags: any[];
    default_configuration: string;
    defines: string[];
    include_dirs: string[];
    libraries: string[];
}
export interface ProcessVariables {
    clang: number;
    host_arch: string;
    node_install_npm: boolean;
    node_install_waf: boolean;
    node_prefix: string;
    node_shared_openssl: boolean;
    node_shared_v8: boolean;
    node_shared_zlib: boolean;
    node_use_dtrace: boolean;
    node_use_etw: boolean;
    node_use_openssl: boolean;
    target_arch: string;
    v8_no_strict_aliasing: number;
    v8_use_snapshot: boolean;
    visibility: string;
}
export interface ProcessConfig {
    target_defaults: ProcessTargetDefaults;
    variables: ProcessVariables;
}
export interface MemoryUsage {
    rss: number;
    heapTotal: number;
    heapUsed: number;
}
export interface CpuUsage {
    user: number;
    system: number;
}
export interface Process extends EventEmitter {
    stdout: Writable;
    stderr: Writable;
    stdin: Readable;
    argv: string[];
    argv0: string;
    execArgv: string[];
    execPath: string;
    env: any;
    exitCode: number;
    pid: number;
    title: string;
    arch: string;
    platform: Platform;
    version: string;
    versions: ProcessVersions;
    config: ProcessConfig;
    mainModule?: any;
    abort(): void;
    chdir(directory: string): void;
    cwd(): string;
    exit(code?: number): void;
    getgid(): number;
    setgid(id: number): void;
    setgid(id: string): void;
    getuid(): number;
    setuid(id: number): void;
    setuid(id: string): void;
    kill(pid: number, signal?: string | number): void;
    memoryUsage(): MemoryUsage;
    cpuUsage(previousValue?: CpuUsage): CpuUsage;
    nextTick(callback: Function, ...args: any[]): void;
    umask(mask?: number): number;
    uptime(): number;
    hrtime(time?: [number, number]): [number, number];
    // Worker
    send?(message: any, sendHandle?: any): void;
    disconnect(): void;
    connected: boolean;
}
export interface Global {
    Array: typeof Array;
    ArrayBuffer: typeof ArrayBuffer;
    Boolean: typeof Boolean;
    Buffer: typeof Buffer;
    DataView: typeof DataView;
    Date: typeof Date;
    Error: typeof Error;
    EvalError: typeof EvalError;
    Float32Array: typeof Float32Array;
    Float64Array: typeof Float64Array;
    Function: typeof Function;
    GLOBAL: Global;
    Infinity: typeof Infinity;
    Int16Array: typeof Int16Array;
    Int32Array: typeof Int32Array;
    Int8Array: typeof Int8Array;
    Intl: typeof Intl;
    JSON: typeof JSON;
    Map: MapConstructor;
    Math: typeof Math;
    NaN: typeof NaN;
    Number: typeof Number;
    Object: typeof Object;
    Promise: Function;
    RangeError: typeof RangeError;
    ReferenceError: typeof ReferenceError;
    RegExp: typeof RegExp;
    Set: SetConstructor;
    String: typeof String;
    Symbol: Function;
    SyntaxError: typeof SyntaxError;
    TypeError: typeof TypeError;
    URIError: typeof URIError;
    Uint16Array: typeof Uint16Array;
    Uint32Array: typeof Uint32Array;
    Uint8Array: typeof Uint8Array;
    Uint8ClampedArray: Function;
    WeakMap: WeakMapConstructor;
    WeakSet: WeakSetConstructor;

    console: typeof console;
    decodeURI: typeof decodeURI;
    decodeURIComponent: typeof decodeURIComponent;
    encodeURI: typeof encodeURI;
    encodeURIComponent: typeof encodeURIComponent;

    eval: typeof eval;
    global: Global;
    isFinite: typeof isFinite;
    isNaN: typeof isNaN;
    parseFloat: typeof parseFloat;
    parseInt: typeof parseInt;
    process: Process;
    root: Global;
    undefined: typeof undefined;
    v8debug?: any;
    clearImmediate: (immediateId: any) => void;
    clearInterval: (intervalId: Timer) => void;
    clearTimeout: (timeoutId: Timer) => void;
    setImmediate: (callback: (...args: any[]) => void, ...args: any[]) => any;
    setInterval: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timer;
    setTimeout: (callback: (...args: any[]) => void, ms: number, ...args: any[]) => Timer;
    escape: (str: string) => string;
    unescape: (str: string) => string;
    gc: () => void;
}
export declare const process: Process;

declare global {
    interface NodeProcess extends Process { }
}

 Object.assign(module.exports, {
     process:require('process')
 });