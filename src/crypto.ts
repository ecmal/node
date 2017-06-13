
import { Buffer } from "./buffer";
import { Duplex } from "./stream";
import { Writable } from "./stream";

export type Utf8AsciiLatin1Encoding = "utf8" | "ascii" | "latin1";
export type HexBase64Latin1Encoding = "latin1" | "hex" | "base64";
export type Utf8AsciiBinaryEncoding = "utf8" | "ascii" | "binary";
export type HexBase64BinaryEncoding = "binary" | "base64" | "hex";
export type ECDHKeyFormat = "compressed" | "uncompressed" | "hybrid";

export interface CredentialDetails {
    pfx: string;
    key: string;
    passphrase: string;
    cert: string;
    ca: string | string[];
    crl: string | string[];
    ciphers: string;
}
export interface Credentials {
    context?: any;
}
export interface RsaPublicKey {
    key: string;
    padding?: number;
}
export interface RsaPrivateKey {
    key: string;
    passphrase?: string,
    padding?: number;
}
export declare class Certificate {
    exportChallenge(spkac: string | Buffer): Buffer;
    exportPublicKey(spkac: string | Buffer): Buffer;
    verifySpkac(spkac: Buffer): boolean;
}
export declare class ECDH {
    generateKeys(): Buffer;
    generateKeys(encoding: HexBase64Latin1Encoding): string;
    generateKeys(encoding: HexBase64Latin1Encoding, format: ECDHKeyFormat): string;
    computeSecret(other_public_key: Buffer): Buffer;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding): string;
    getPrivateKey(): Buffer;
    getPrivateKey(encoding: HexBase64Latin1Encoding): string;
    getPublicKey(): Buffer;
    getPublicKey(encoding: HexBase64Latin1Encoding): string;
    getPublicKey(encoding: HexBase64Latin1Encoding, format: ECDHKeyFormat): string;
    setPrivateKey(private_key: Buffer): void;
    setPrivateKey(private_key: string, encoding: HexBase64Latin1Encoding): void;
}
export declare class Hash extends Duplex {
    update(data: string | Buffer): Hash;
    update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Hash;
    digest(): Buffer;
    digest(encoding: HexBase64Latin1Encoding): string;
}
export declare class Hmac extends Duplex {
    update(data: string | Buffer): Hmac;
    update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Hmac;
    digest(): Buffer;
    digest(encoding: HexBase64Latin1Encoding): string;
}
export declare class Cipher extends Duplex {
    update(data: Buffer): Buffer;
    update(data: string, input_encoding: Utf8AsciiBinaryEncoding): Buffer;
    update(data: Buffer, input_encoding: any, output_encoding: HexBase64BinaryEncoding): string;
    update(data: string, input_encoding: Utf8AsciiBinaryEncoding, output_encoding: HexBase64BinaryEncoding): string;
    final(): Buffer;
    final(output_encoding: string): string;
    setAutoPadding(auto_padding?: boolean): void;
    getAuthTag(): Buffer;
    setAAD(buffer: Buffer): void;
}
export declare class Decipher extends Duplex {
    update(data: Buffer): Buffer;
    update(data: string, input_encoding: HexBase64BinaryEncoding): Buffer;
    update(data: Buffer, input_encoding: any, output_encoding: Utf8AsciiBinaryEncoding): string;
    update(data: string, input_encoding: HexBase64BinaryEncoding, output_encoding: Utf8AsciiBinaryEncoding): string;
    final(): Buffer;
    final(output_encoding: string): string;
    setAutoPadding(auto_padding?: boolean): void;
    setAuthTag(tag: Buffer): void;
    setAAD(buffer: Buffer): void;
}
export declare class Sign extends Writable {
    update(data: string | Buffer): Sign;
    update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Sign;
    sign(private_key: string | { key: string; passphrase: string }): Buffer;
    sign(private_key: string | { key: string; passphrase: string }, output_format: HexBase64Latin1Encoding): string;
}
export declare class Verify extends Writable {
    update(data: string | Buffer): Verify;
    update(data: string | Buffer, input_encoding: Utf8AsciiLatin1Encoding): Verify;
    verify(object: string, signature: Buffer): boolean;
    verify(object: string, signature: string, signature_format: HexBase64Latin1Encoding): boolean;
}
export declare class DiffieHellman {
    generateKeys(): Buffer;
    generateKeys(encoding: HexBase64Latin1Encoding): string;
    computeSecret(other_public_key: Buffer): Buffer;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding): Buffer;
    computeSecret(other_public_key: string, input_encoding: HexBase64Latin1Encoding, output_encoding: HexBase64Latin1Encoding): string;
    getPrime(): Buffer;
    getPrime(encoding: HexBase64Latin1Encoding): string;
    getGenerator(): Buffer;
    getGenerator(encoding: HexBase64Latin1Encoding): string;
    getPublicKey(): Buffer;
    getPublicKey(encoding: HexBase64Latin1Encoding): string;
    getPrivateKey(): Buffer;
    getPrivateKey(encoding: HexBase64Latin1Encoding): string;
    setPublicKey(public_key: Buffer): void;
    setPublicKey(public_key: string, encoding: string): void;
    setPrivateKey(private_key: Buffer): void;
    setPrivateKey(private_key: string, encoding: string): void;
    verifyError: number;
}
export var fips: boolean;
export declare function createCredentials(details: CredentialDetails): Credentials;
export declare function createHash(algorithm: string): Hash;
export declare function createHmac(algorithm: string, key: string | Buffer): Hmac;
export declare function createCipher(algorithm: string, password: any): Cipher;
export declare function createCipheriv(algorithm: string, key: any, iv: any): Cipher;
export declare function createDecipher(algorithm: string, password: any): Decipher;
export declare function createDecipheriv(algorithm: string, key: any, iv: any): Decipher;
export declare function createSign(algorithm: string): Sign;
export declare function createVerify(algorith: string): Verify;
export declare function createDiffieHellman(prime_length: number, generator?: number): DiffieHellman;
export declare function createDiffieHellman(prime: Buffer): DiffieHellman;
export declare function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding): DiffieHellman;
export declare function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: number | Buffer): DiffieHellman;
export declare function createDiffieHellman(prime: string, prime_encoding: HexBase64Latin1Encoding, generator: string, generator_encoding: HexBase64Latin1Encoding): DiffieHellman;

export declare function getDiffieHellman(group_name: string): DiffieHellman;
export declare function pbkdf2(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string, callback: (err: Error, derivedKey: Buffer) => any): void;
export declare function pbkdf2Sync(password: string | Buffer, salt: string | Buffer, iterations: number, keylen: number, digest: string): Buffer;
export declare function randomBytes(size: number): Buffer;
export declare function randomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;
export declare function pseudoRandomBytes(size: number): Buffer;
export declare function pseudoRandomBytes(size: number, callback: (err: Error, buf: Buffer) => void): void;

export declare function publicEncrypt(public_key: string | RsaPublicKey, buffer: Buffer): Buffer
export declare function privateDecrypt(private_key: string | RsaPrivateKey, buffer: Buffer): Buffer
export declare function privateEncrypt(private_key: string | RsaPrivateKey, buffer: Buffer): Buffer
export declare function publicDecrypt(public_key: string | RsaPublicKey, buffer: Buffer): Buffer
export declare function getCiphers(): string[];
export declare function getCurves(): string[];
export declare function getHashes(): string[];

export declare function createECDH(curve_name: string): ECDH;
export declare function timingSafeEqual(a: Buffer, b: Buffer): boolean;
export declare var DEFAULT_ENCODING: string;

let binding = require('crypto');

Object.assign(module.exports, {
    DEFAULT_ENCODING: binding.DEFAULT_ENCODING,
    constants: binding.constants,
    Hash: binding.Hash,
    Cipher: binding.Cipher,
    Hmac: binding.Hmac,
    Cipheriv: binding.Cipheriv,
    Decipher: binding.Decipher,
    Decipheriv: binding.Decipheriv,
    Sign: binding.Sign,
    Verify: binding.Verify,
    DiffieHellman: binding.DiffieHellman,
    DiffieHellmanGroup: binding.DiffieHellmanGroup,
    Certificate: binding.Certificate,
    createHash: binding.createHash,
    createHmac: binding.createHmac,
    createCipher: binding.createCipher,
    createCipheriv: binding.createCipheriv,
    createDecipher: binding.createDecipher,
    createDecipheriv: binding.createDecipheriv,
    createSign: binding.createSign,
    createVerify: binding.createVerify,
    publicEncrypt: binding.publicEncrypt,
    publicDecrypt: binding.publicDecrypt,
    privateEncrypt: binding.privateEncrypt,
    privateDecrypt: binding.privateDecrypt,
    createDiffieHellman: binding.createDiffieHellman,
    getDiffieHellman: binding.getDiffieHellman,
    createDiffieHellmanGroup: binding.createDiffieHellmanGroup,
    createECDH: binding.createECDH,
    pbkdf2: binding.pbkdf2,
    pbkdf2Sync: binding.pbkdf2Sync,
    setEngine: binding.setEngine,
    randomFillSync: binding.randomFillSync,
    randomFill: binding.randomFill,
    pseudoRandomBytes: binding.pseudoRandomBytes,
    randomBytes: binding.randomBytes,
    prng: binding.prng,
    rng: binding.rng,
    getCiphers: binding.getCiphers,
    getHashes: binding.getHashes,
    getCurves: binding.getCurves,
    timingSafeEqual: binding.timingSafeEqual,
});