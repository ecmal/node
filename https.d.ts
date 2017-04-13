declare module "@ecmal/node/https" {
    import {RequestOptions as HttpRequestOptions} from "@ecmal/node/http";
    import {AgentOptions as HttpAgentOptions} from "@ecmal/node/http";
    import {Agent as HttpAgent} from "@ecmal/node/http";
    import {ClientRequest as HttpClientRequest} from "@ecmal/node/http";
    import {IncomingMessage as HttpIncomingMessage} from "@ecmal/node/http";
    import {SecureContext,Server as TlsServer} from "@ecmal/node/tls";

    export interface ServerOptions {
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
    export interface RequestOptions extends HttpRequestOptions {
        pfx?: any;
        key?: any;
        passphrase?: string;
        cert?: any;
        ca?: any;
        ciphers?: string;
        rejectUnauthorized?: boolean;
        secureProtocol?: string;
    }
    export interface AgentOptions extends HttpAgentOptions {
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
    export class Agent extends HttpAgent {
        constructor(options?: AgentOptions)
    }
    export class Server extends TlsServer { }
    export function createServer(options: ServerOptions, requestListener?: Function): Server;
    export function request(options: RequestOptions, callback?: (res: HttpIncomingMessage) => void): HttpClientRequest;
    export function get(options: RequestOptions, callback?: (res: HttpIncomingMessage) => void): HttpClientRequest;
    export var globalAgent: Agent;
}