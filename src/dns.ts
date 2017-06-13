
export interface MxRecord {
    exchange: string,
    priority: number
}
export declare function lookup(domain: string, family: number, callback: (err: Error, address: string, family: number) => void): string;
export declare function lookup(domain: string, callback: (err: Error, address: string, family: number) => void): string;
export declare function resolve(domain: string, rrtype: string, callback: (err: Error, addresses: string[]) => void): string[];
export declare function resolve(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
export declare function resolve4(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
export declare function resolve6(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
export declare function resolveMx(domain: string, callback: (err: Error, addresses: MxRecord[]) => void): string[];
export declare function resolveTxt(domain: string, callback: (err: Error, addresses: string[][]) => void): string[][];
export declare function resolveSrv(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
export declare function resolveNs(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
export declare function resolveCname(domain: string, callback: (err: Error, addresses: string[]) => void): string[];
export declare function reverse(ip: string, callback: (err: Error, domains: string[]) => void): string[];
export declare function setServers(servers: string[]): void;

//Error codes
export declare var NODATA: string;
export declare var FORMERR: string;
export declare var SERVFAIL: string;
export declare var NOTFOUND: string;
export declare var NOTIMP: string;
export declare var REFUSED: string;
export declare var BADQUERY: string;
export declare var BADNAME: string;
export declare var BADFAMILY: string;
export declare var BADRESP: string;
export declare var CONNREFUSED: string;
export declare var TIMEOUT: string;
export declare var EOF: string;
export declare var FILE: string;
export declare var NOMEM: string;
export declare var DESTRUCTION: string;
export declare var BADSTR: string;
export declare var BADFLAGS: string;
export declare var NONAME: string;
export declare var BADHINTS: string;
export declare var NOTINITIALIZED: string;
export declare var LOADIPHLPAPI: string;
export declare var ADDRGETNETWORKPARAMS: string;
export declare var CANCELLED: string;





Object.assign(module.exports, require('dns'));