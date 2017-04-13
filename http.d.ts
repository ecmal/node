declare module "@ecmal/node/http" {
    import {EventEmitter,EmitterEvents} from "@ecmal/node/events";
    import {Buffer} from "@ecmal/node/buffer";
    import {Readable,ReadableEvents,Writable,WritableEvents} from "@ecmal/node/stream";
    import {Socket,ConnectOptions} from "@ecmal/node/net";
    import {Server as NetServer} from "@ecmal/node/net";
    import {ServerEvents as NetServerEvents} from "@ecmal/node/net";
    import {Timer} from "@ecmal/node/timers";
    export type ClientRequestEvents = WritableEvents&{
        abort();
        aborted();
        connect(response:IncomingMessage,socket:Socket,head:Buffer);
        upgrade(response:IncomingMessage,socket:Socket,head:Buffer);
        continue()
        response(response:IncomingMessage);
        socket(socket:IncomingMessage);
    }
    export type ServerEvents = NetServerEvents & {
        checkContinue(request:IncomingMessage,response:ServerResponse);
        checkExpectation(request:IncomingMessage,response:ServerResponse);
        clientError(error:Error,socket:Socket);
        close();
        connect(request:IncomingMessage,socket:Socket,head:Buffer);
        connection(socket:Socket);
        continue()
        request(request:IncomingMessage,response:ServerResponse);
        upgrade(request:IncomingMessage,socket:Socket,head:Buffer);
    }
    export type ServerResponseEvents = WritableEvents&{
        close();
        finish();
    }
    export type IncomingMessageEvents = ReadableEvents&{
        aborted();
        close();
    }
    export interface RequestOptions {
        protocol?: string;
        host?: string;
        hostname?: string;
        family?: number;
        port?: number;
        localAddress?: string;
        socketPath?: string;
        method?: string;
        path?: string;
        headers?: { [key: string]: any };
        auth?: string;
        agent?: Agent | boolean;
        timeout?: number;
    }
    export interface AgentOptions {
        /**
         * Keep sockets around in a pool to be used by other requests in the future. Default = false
         */
        keepAlive?: boolean;
        /**
         * When using HTTP KeepAlive, how often to send TCP KeepAlive packets over sockets being kept alive. Default = 1000.
         * Only relevant if keepAlive is set to true.
         */
        keepAliveMsecs?: number;
        /**
         * Maximum number of sockets to allow per host. Default for Node 0.10 is 5, default for Node 0.12 is Infinity
         */
        maxSockets?: number;
        /**
         * Maximum number of sockets to leave open in a free state. Only relevant if keepAlive is set to true. Default = 256.
         */
        maxFreeSockets?: number;
    }
    export class Agent {
        static defaultMaxSockets:number;
        maxSockets : number;
        maxFreeSockets : number;
        protected sockets : MapLike<Socket[]>;
        protected freeSockets : MapLike<Socket[]>;
        protected requests : MapLike<ClientRequest[]>;
        constructor(opts?: AgentOptions);
        /**
         * Destroy any sockets that are currently in use by the agent.
         * It is usually not necessary to do this. However, if you are using an agent with KeepAlive enabled,
         * then it is best to explicitly shut down the agent when you know that it will no longer be used. Otherwise,
         * sockets may hang open for quite a long time before the server terminates them.
         */
        protected destroy(): void;
        protected getName(options:RequestOptions):string;
        protected addRequest(req:ClientRequest,options:RequestOptions);
        protected createConnection(options:ConnectOptions,listener?:()=>void):Socket;
        protected createSocket(req:ClientRequest,options:RequestOptions,cb:(err:Error,sock:Socket)=>void);
        protected removeSocket(sock:Socket,options:RequestOptions);
    }
    export class ClientRequest extends Writable {
        events:ClientRequestEvents;
        aborted:number;
        constructor(options: RequestOptions);
        
        abort(): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setSocketKeepAlive(enable?: boolean, initialDelay?: number): void;

        setHeader(name: string, value: string | string[]): void;
        getHeader(name: string): string;
        getHeaderNames():string[];
        getHeaders():MapLike<string>;
        removeHeader(name: string): void;
        flushHeaders():void;
        addTrailers(headers: any): void;
    }
    export class Server extends NetServer {
        events:ServerEvents;
        setTimeout(msecs: number, callback: Function): void;
        maxHeadersCount: number;
        timeout: number;
        listening: boolean;
    }
    export class ServerResponse extends Writable {
        events:ServerResponseEvents;
        statusCode: number;
        statusMessage: string;
        headersSent: boolean; 
        sendDate: boolean;
        finished: boolean;
        writeContinue(): void;
        writeHead(statusCode: number, reasonPhrase?: string, headers?: any): void;
        writeHead(statusCode: number, headers?: any): void;       
        setHeader(name: string, value: string | string[]): void;
        setTimeout(msecs: number, callback: Function): ServerResponse;
        getHeader(name: string): string;
        removeHeader(name: string): void;
        addTrailers(headers: any): void;      
    }
    export class IncomingMessage extends Readable {
        events:IncomingMessageEvents;
        httpVersion: string;
        httpVersionMajor: number;
        httpVersionMinor: number;
        connection: Socket;
        headers: any;
        rawHeaders: string[];
        trailers: any;
        rawTrailers: any;
        setTimeout(msecs: number, callback: Function): Timer;
        /**
         * Only valid for request obtained from http.Server.
         */
        method?: string;
        /**
         * Only valid for request obtained from http.Server.
         */
        url?: string;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusCode?: number;
        /**
         * Only valid for response obtained from http.ClientRequest.
         */
        statusMessage?: string;
        socket: Socket;
        destroy(error?: Error): void;
    }
    export const METHODS: string[];
    export const STATUS_CODES: ArrayLike<string>;
    export const globalAgent: Agent;
    export function createServer(requestListener?: (request: IncomingMessage, response: ServerResponse) => void): Server;
    export function createClient(port?: number, host?: string): any;
    export function request(options: RequestOptions, callback?: (res: IncomingMessage) => void): ClientRequest;
    export function get(options: any, callback?: (res: IncomingMessage) => void): ClientRequest;
   
}