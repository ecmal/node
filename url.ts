// testing
export interface Url {
    href?: string;
    protocol?: string;
    auth?: string;
    hostname?: string;
    port?: string;
    host?: string;
    pathname?: string;
    search?: string;
    query?: any; // string | Object
    slashes?: boolean;
    hash?: string;
    path?: string;
}

export declare function parse(urlStr: string, parseQueryString?: boolean , slashesDenoteHost?: boolean ): Url;
export declare function format(url: Url): string;
export declare function resolve(from: string, to: string): string;
