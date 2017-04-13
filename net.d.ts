declare module "@ecmal/node/net" {
    import {EventEmitter} from "@ecmal/node/events";
    import {Duplex} from "@ecmal/node/stream";
    import {DuplexEvents} from "@ecmal/node/stream";
    export type SocketEvents = DuplexEvents & {
        close(had_error: boolean):void;
        connect():void;
        drain():void;
        timeout():void;
        lookup(err: Error, address: string, family: string | number, host: string):void;
    }
    export type ServerEvents = DuplexEvents & {
        connection(socket: Socket):void;
        listening():void;
    }
    export interface ListenOptions {
        port?: number;
        host?: string;
        backlog?: number;
        path?: string;
        exclusive?: boolean;
    }
    export interface ConnectOptions { 
        port: number, 
        host?: string, 
        localAddress?: string, 
        localPort?: string, 
        family?: number, 
        allowHalfOpen?: boolean; 
    }
    export interface SocketOptions {
        fd?: any;
        allowHalfOpen?: boolean;
        readable?: boolean;
        writable?: boolean;
        type?: string;
    }
    export interface ServerOptions{
        allowHalfOpen: boolean,
        pauseOnConnect: boolean
    }
    export class Socket extends Duplex {
        events:SocketEvents
        bufferSize: number;
        constructor(options?: SocketOptions);
        connect(port: number, host?: string, connectionListener?: Function): void;
        connect(path: string, connectionListener?: Function): void;

        destroy(err?: any): void;
        setTimeout(timeout: number, callback?: Function): void;
        setNoDelay(noDelay?: boolean): void;
        setKeepAlive(enable?: boolean, initialDelay?: number): void;
        address(): { port: number; family: string; address: string; };
        unref(): void;
        ref(): void;

        remoteAddress: string;
        remoteFamily: string;
        remotePort: number;
        localAddress: string;
        localPort: number;
        bytesRead: number;
        bytesWritten: number;
        destroyed: boolean;

    }
    export class Server extends EventEmitter {
        events:ServerEvents
        listen(port: number, hostname?: string, backlog?: number, listeningListener?: Function): Server;
        listen(port: number, hostname?: string, listeningListener?: Function): Server;
        listen(port: number, backlog?: number, listeningListener?: Function): Server;
        listen(port: number, listeningListener?: Function): Server;
        listen(path: string, backlog?: number, listeningListener?: Function): Server;
        listen(path: string, listeningListener?: Function): Server;
        listen(options: ListenOptions, listeningListener?: Function): Server;
        listen(handle: any, backlog?: number, listeningListener?: Function): Server;
        listen(handle: any, listeningListener?: Function): Server;
        close(callback?: Function): Server;
        address(): { port: number; family: string; address: string; };
        getConnections(cb: (error: Error, count: number) => void): void;
        ref(): Server;
        unref(): Server;
        maxConnections: number;
        connections: number;
        listening: boolean;
        constructor(options?:ServerOptions)
    }
    export function createServer(connectionListener?: (socket: Socket) => void): Server;
    export function createServer(options?: ServerOptions, connectionListener?: (socket: Socket) => void): Server;
    export function connect(options:ConnectOptions, connectionListener?: ()=>void): Socket;
    export function connect(port: number, host?: string, connectionListener?: ()=>void): Socket;
    export function connect(path: string, connectionListener?: ()=>void): Socket;
    export function createConnection(options: ConnectOptions, connectionListener?: ()=>void): Socket;
    export function createConnection(port: number, host?: string, connectionListener?: ()=>void): Socket;
    export function createConnection(path: string, connectionListener?:()=>void): Socket;
    export function isIP(input: string): number;
    export function isIPv4(input: string): boolean;
    export function isIPv6(input: string): boolean;
}