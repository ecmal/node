declare module "@ecmal/node/zlib" {
    import {Buffer} from "@ecmal/node/buffer";
    import {Transform} from "@ecmal/node/stream";

    export interface ZlibOptions {
        flush?: number; // default: zlib.constants.Z_NO_FLUSH
        finishFlush?: number; // default: zlib.constants.Z_FINISH
        chunkSize?: number; // default: 16*1024
        windowBits?: number;
        level?: number; // compression only
        memLevel?: number; // compression only
        strategy?: number; // compression only
        dictionary?: any; // deflate/inflate only, empty dictionary by default
    }

    export interface Gzip extends Transform { }
    export interface Gunzip extends Transform { }
    export interface Deflate extends Transform { }
    export interface Inflate extends Transform { }
    export interface DeflateRaw extends Transform { }
    export interface InflateRaw extends Transform { }
    export interface Unzip extends Transform { }

    export function createGzip(options?: ZlibOptions): Gzip;
    export function createGunzip(options?: ZlibOptions): Gunzip;
    export function createDeflate(options?: ZlibOptions): Deflate;
    export function createInflate(options?: ZlibOptions): Inflate;
    export function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
    export function createInflateRaw(options?: ZlibOptions): InflateRaw;
    export function createUnzip(options?: ZlibOptions): Unzip;

    export function deflate(buf: Buffer | string, callback: (error: Error, result: Buffer) => void): void;
    export function deflateSync(buf: Buffer | string, options?: ZlibOptions): Buffer;
    export function deflateRaw(buf: Buffer | string, callback: (error: Error, result: Buffer) => void): void;
    export function deflateRawSync(buf: Buffer | string, options?: ZlibOptions): Buffer;
    export function gzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    export function gzipSync(buf: Buffer, options?: ZlibOptions): Buffer;
    export function gunzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    export function gunzipSync(buf: Buffer, options?: ZlibOptions): Buffer;
    export function inflate(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    export function inflateSync(buf: Buffer, options?: ZlibOptions): Buffer;
    export function inflateRaw(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    export function inflateRawSync(buf: Buffer, options?: ZlibOptions): Buffer;
    export function unzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
    export function unzipSync(buf: Buffer, options?: ZlibOptions): Buffer;

    export namespace constants {
        // Allowed flush values.

        export const Z_NO_FLUSH: number;
        export const Z_PARTIAL_FLUSH: number;
        export const Z_SYNC_FLUSH: number;
        export const Z_FULL_FLUSH: number;
        export const Z_FINISH: number;
        export const Z_BLOCK: number;
        export const Z_TREES: number;

        // Return codes for the compression/decompression functions. Negative values are errors, positive values are used for special but normal events.

        export const Z_OK: number;
        export const Z_STREAM_END: number;
        export const Z_NEED_DICT: number;
        export const Z_ERRNO: number;
        export const Z_STREAM_ERROR: number;
        export const Z_DATA_ERROR: number;
        export const Z_MEM_ERROR: number;
        export const Z_BUF_ERROR: number;
        export const Z_VERSION_ERROR: number;

        // Compression levels.

        export const Z_NO_COMPRESSION: number;
        export const Z_BEST_SPEED: number;
        export const Z_BEST_COMPRESSION: number;
        export const Z_DEFAULT_COMPRESSION: number;

        // Compression strategy.

        export const Z_FILTERED: number;
        export const Z_HUFFMAN_ONLY: number;
        export const Z_RLE: number;
        export const Z_FIXED: number;
        export const Z_DEFAULT_STRATEGY: number;
    }

    // Constants
    export var Z_NO_FLUSH: number;
    export var Z_PARTIAL_FLUSH: number;
    export var Z_SYNC_FLUSH: number;
    export var Z_FULL_FLUSH: number;
    export var Z_FINISH: number;
    export var Z_BLOCK: number;
    export var Z_TREES: number;
    export var Z_OK: number;
    export var Z_STREAM_END: number;
    export var Z_NEED_DICT: number;
    export var Z_ERRNO: number;
    export var Z_STREAM_ERROR: number;
    export var Z_DATA_ERROR: number;
    export var Z_MEM_ERROR: number;
    export var Z_BUF_ERROR: number;
    export var Z_VERSION_ERROR: number;
    export var Z_NO_COMPRESSION: number;
    export var Z_BEST_SPEED: number;
    export var Z_BEST_COMPRESSION: number;
    export var Z_DEFAULT_COMPRESSION: number;
    export var Z_FILTERED: number;
    export var Z_HUFFMAN_ONLY: number;
    export var Z_RLE: number;
    export var Z_FIXED: number;
    export var Z_DEFAULT_STRATEGY: number;
    export var Z_BINARY: number;
    export var Z_TEXT: number;
    export var Z_ASCII: number;
    export var Z_UNKNOWN: number;
    export var Z_DEFLATED: number;
}
