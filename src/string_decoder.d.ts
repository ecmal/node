///<reference path="index.d.ts"/>
export interface NodeStringDecoder {
    write(buffer: Buffer): string;
    detectIncompleteChar(buffer: Buffer): number;
}
export var StringDecoder: {
    new (encoding: string): NodeStringDecoder;
};