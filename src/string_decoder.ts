
import { Buffer } from "./buffer";

export declare class StringDecoder{
    constructor(encoding?: string)
    write(buffer: Buffer): string;
    end(buffer?: Buffer): string;
}

Object.assign(module.exports, require('string_decoder'));