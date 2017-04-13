declare module "@ecmal/node/cluster" {

    import {EventEmitter}   from "@ecmal/node/events";
    import {EmitterEvents}  from "@ecmal/node/events";
    import {Socket}  from "@ecmal/node/net";
    import {Server}  from "@ecmal/node/net";
    import {ChildProcess}  from "@ecmal/node/child_process";
    export type WorkerEvents = EmitterEvents & {
        disconnect(worker: Worker):void;
        exit(worker: Worker, code: number, signal: string):void;
        fork(worker: Worker):void;
        listening(worker: Worker, address: Address):void;
        message(worker: Worker, message: any, handle: Socket | Server):void;
        online(worker: Worker):void;
        setup(settings: any):void;
    }
    export type ClusterEvents = WorkerEvents & {
        setup(settings: any):void;
    }
    // interfaces
    export interface ClusterSettings {
        execArgv?: string[]; // default: process.execArgv
        exec?: string;
        args?: string[];
        silent?: boolean;
        stdio?: any[];
        uid?: number;
        gid?: number;
    }

    export interface ClusterSetupMasterSettings {
        exec?: string;  // default: process.argv[1]
        args?: string[];  // default: process.argv.slice(2)
        silent?: boolean;  // default: false
        stdio?: any[];
    }

    export interface Address {
        address: string;
        port: number;
        addressType: number | "udp4" | "udp6";  // 4, 6, -1, "udp4", "udp6"
    }

    export class Worker extends EventEmitter {
        events:WorkerEvents;
        id: string;
        process: ChildProcess;
        exitedAfterDisconnect: boolean;
        send(message: any, sendHandle?: any): boolean;
        kill(signal?: string): void;
        destroy(signal?: string): void;
        disconnect(): void;
        isConnected(): boolean;
        isDead(): boolean;
    }
    export interface Cluster extends EventEmitter {
        Worker:Worker;
        events:ClusterEvents;
        disconnect(callback?: Function): void;
        fork(env?: any): Worker;
        isMaster: boolean;
        isWorker: boolean;
        // TODO: cluster.schedulingPolicy
        settings: ClusterSettings;
        setupMaster(settings?: ClusterSetupMasterSettings): void;
        worker: Worker;
        workers: MapLike<Worker>;
    }
}