
declare module "@ecmal/node/dgram" {
    import {EventEmitter,EmitterEvents} from "@ecmal/node/events";
    import {Buffer} from "@ecmal/node/buffer";
    import {Readable,ReadableEvents,Writable,WritableEvents} from "@ecmal/node/stream";

    export type SocketEvents = EmitterEvents&{
        close();
        error(err: Error);
        listening()
        message(msg: Buffer, rinfo: AddressInfo)
    }
    export interface RemoteInfo {
        address: string;
        family: string;
        port: number;
    }

    export interface AddressInfo {
        address: string;
        family: string;
        port: number;
    }
    export interface BindOptions {
        port: number;
        address?: string;
        exclusive?: boolean;
    }

    export interface SocketOptions {
        type: "udp4" | "udp6";
        reuseAddr?: boolean;
    }

    export function createSocket(type: string, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;
    export function createSocket(options: SocketOptions, callback?: (msg: Buffer, rinfo: RemoteInfo) => void): Socket;

    export interface Socket extends EventEmitter {
        events:SocketEvents;
        send(msg: Buffer | String | any[], port: number, address: string, callback?: (error: Error, bytes: number) => void): void;
        send(msg: Buffer | String | any[], offset: number, length: number, port: number, address: string, callback?: (error: Error, bytes: number) => void): void;
        bind(port?: number, address?: string, callback?: () => void): void;
        bind(options: BindOptions, callback?: Function): void;
        close(callback?: () => void): void;
        address(): AddressInfo;
        setBroadcast(flag: boolean): void;
        setTTL(ttl: number): void;
        setMulticastTTL(ttl: number): void;
        setMulticastLoopback(flag: boolean): void;
        addMembership(multicastAddress: string, multicastInterface?: string): void;
        dropMembership(multicastAddress: string, multicastInterface?: string): void;
        ref(): this;
        unref(): this;
    }
}