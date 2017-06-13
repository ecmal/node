import * as Qs from "./querystring";
import {StringifyOptions} from "./querystring";
import {ParseOptions} from "./querystring";

export declare class Url implements Dictionary {
    [k:string]:any;
    static qsFormat(obj: any, sep?: string, eq?: string, options?: StringifyOptions): string
    static qsParse(str: string, sep?: string, eq?: string, options?: ParseOptions): any;
    static escape(str: string): string;
    static unescape(str: string): string;

    static parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url;
    static format(url: Url): string;
    static resolve(from: string, to: string): string;

    href?: string;
    protocol?: string;
    auth?: string;
    hostname?: string;
    port?: string;
    host?: string;
    pathname?: string;
    search?: string;
    query?: string | any;
    slashes?: boolean;
    hash?: string;
    path?: string;
    parse(urlStr: string, query?: boolean, slashes?: boolean): this;
    format(): string;
    resolve(to: string): string;
}

export declare function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url;
export declare function format(url: Url): string;
export declare function resolve(from: string, to: string): string;

export declare class URLSearchParams implements Iterable<string[]> {
    constructor(init?: URLSearchParams | string);
    append(name: string, value: string): void;
    delete(name: string): void;
    entries(): Iterator<string[]>;
    forEach(callback: (value: string, name: string) => void): void;
    get(name: string): string | null;
    getAll(name: string): string[];
    has(name: string): boolean;
    keys(): Iterator<string>;
    set(name: string, value: string): void;
    sort(): void;
    toString(): string;
    values(): Iterator<string>;
    [Symbol.iterator](): Iterator<string[]>;
}

export declare class URL {
    constructor(input: string, base?: string | URL);
    hash: string;
    host: string;
    hostname: string;
    href: string;
    readonly origin: string;
    password: string;
    pathname: string;
    port: string;
    protocol: string;
    search: string;
    readonly searchParams: URLSearchParams;
    username: string;
    toString(): string;
    toJSON(): string;
}

const binding = require('url');

binding.Url.parse = binding.parse;
binding.Url.format = binding.format;
binding.Url.resolve = binding.resolve;
binding.Url.qsParse = Qs.parse;
binding.Url.qsFormat = Qs.stringify;
binding.Url.escape = Qs.escape;
binding.Url.unescape = Qs.unescape;


Object.assign(module.exports, {
    Url:binding.Url,
    parse:binding.parse,
    format:binding.format,
    resolve:binding.resolve,
    URL:binding.URL,
    URLSearchParams:binding.URLSearchParams,
});