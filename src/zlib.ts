
import { Buffer } from "./buffer";
import { Transform } from "./stream";

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

export declare function createGzip(options?: ZlibOptions): Gzip;
export declare function createGunzip(options?: ZlibOptions): Gunzip;
export declare function createDeflate(options?: ZlibOptions): Deflate;
export declare function createInflate(options?: ZlibOptions): Inflate;
export declare function createDeflateRaw(options?: ZlibOptions): DeflateRaw;
export declare function createInflateRaw(options?: ZlibOptions): InflateRaw;
export declare function createUnzip(options?: ZlibOptions): Unzip;

export declare function deflate(buf: Buffer | string, callback: (error: Error, result: Buffer) => void): void;
export declare function deflateSync(buf: Buffer | string, options?: ZlibOptions): Buffer;
export declare function deflateRaw(buf: Buffer | string, callback: (error: Error, result: Buffer) => void): void;
export declare function deflateRawSync(buf: Buffer | string, options?: ZlibOptions): Buffer;
export declare function gzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export declare function gzipSync(buf: Buffer, options?: ZlibOptions): Buffer;
export declare function gunzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export declare function gunzipSync(buf: Buffer, options?: ZlibOptions): Buffer;
export declare function inflate(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export declare function inflateSync(buf: Buffer, options?: ZlibOptions): Buffer;
export declare function inflateRaw(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export declare function inflateRawSync(buf: Buffer, options?: ZlibOptions): Buffer;
export declare function unzip(buf: Buffer, callback: (error: Error, result: Buffer) => void): void;
export declare function unzipSync(buf: Buffer, options?: ZlibOptions): Buffer;

export declare namespace constants {
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
export declare var Z_NO_FLUSH: number;
export declare var Z_PARTIAL_FLUSH: number;
export declare var Z_SYNC_FLUSH: number;
export declare var Z_FULL_FLUSH: number;
export declare var Z_FINISH: number;
export declare var Z_BLOCK: number;
export declare var Z_TREES: number;
export declare var Z_OK: number;
export declare var Z_STREAM_END: number;
export declare var Z_NEED_DICT: number;
export declare var Z_ERRNO: number;
export declare var Z_STREAM_ERROR: number;
export declare var Z_DATA_ERROR: number;
export declare var Z_MEM_ERROR: number;
export declare var Z_BUF_ERROR: number;
export declare var Z_VERSION_ERROR: number;
export declare var Z_NO_COMPRESSION: number;
export declare var Z_BEST_SPEED: number;
export declare var Z_BEST_COMPRESSION: number;
export declare var Z_DEFAULT_COMPRESSION: number;
export declare var Z_FILTERED: number;
export declare var Z_HUFFMAN_ONLY: number;
export declare var Z_RLE: number;
export declare var Z_FIXED: number;
export declare var Z_DEFAULT_STRATEGY: number;
export declare var Z_BINARY: number;
export declare var Z_TEXT: number;
export declare var Z_ASCII: number;
export declare var Z_UNKNOWN: number;
export declare var Z_DEFLATED: number;

Object.assign(module.exports, require('zlib'));

