
import { RequestOptions as HttpRequestOptions } from "./http";
import { AgentOptions as HttpAgentOptions } from "./http";
import { Agent as HttpAgent } from "./http";
import { ClientRequest as HttpClientRequest } from "./http";
import { IncomingMessage as HttpIncomingMessage } from "./http";
import { SecureContext, Server as TlsServer } from "./tls";

export declare interface ServerOptions {
    pfx?: any;
    key?: any;
    passphrase?: string;
    cert?: any;
    ca?: any;
    crl?: any;
    ciphers?: string;
    honorCipherOrder?: boolean;
    requestCert?: boolean;
    rejectUnauthorized?: boolean;
    NPNProtocols?: any;
    SNICallback?: (servername: string, cb: (err: Error, ctx: SecureContext) => any) => any;
}
export declare interface RequestOptions extends HttpRequestOptions {
    pfx?: any;
    key?: any;
    passphrase?: string;
    cert?: any;
    ca?: any;
    ciphers?: string;
    rejectUnauthorized?: boolean;
    secureProtocol?: string;
}
export declare interface AgentOptions extends HttpAgentOptions {
    pfx?: any;
    key?: any;
    passphrase?: string;
    cert?: any;
    ca?: any;
    ciphers?: string;
    rejectUnauthorized?: boolean;
    secureProtocol?: string;
    maxCachedSessions?: number;
}
export declare class Agent extends HttpAgent {
    constructor(options?: AgentOptions)
}
export declare class Server extends TlsServer { }
export declare function createServer(options: ServerOptions, requestListener?: Function): Server;
export declare function request(options: RequestOptions, callback?: (res: HttpIncomingMessage) => void): HttpClientRequest;
export declare function get(options: RequestOptions, callback?: (res: HttpIncomingMessage) => void): HttpClientRequest;
export declare const globalAgent: Agent;


Object.assign(module.exports, require('https'));