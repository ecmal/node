declare module "@ecmal/node/url" {
    export class Url {
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
        parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): this;
        format(): this;
        resolve(to: string): string
    }

    export function parse(urlStr: string, parseQueryString?: boolean, slashesDenoteHost?: boolean): Url;
    export function format(url: Url): string;
    export function resolve(from: string, to: string): string;

    export class URLSearchParams implements Iterable<string[]> {
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

    export class URL {
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
}
