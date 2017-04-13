declare module "@ecmal/node/string_decoder" {
    import {Buffer} from "@ecmal/node/buffer";
    export interface NodeStringDecoder {
        write(buffer: Buffer): string;
        end(buffer?: Buffer): string;
    }
    export var StringDecoder: {
        new (encoding?: string): NodeStringDecoder;
    };
}
