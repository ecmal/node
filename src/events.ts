export type Evs<T extends { events }> = T["events"];
export type Ons<T> = {
    <P extends keyof T>(e: P, l: T[P]): T;
};
export type EmitterEvents = {
    newListener(event: string, callback: Function): void;
    removeListener(event: string, callback: Function): void;
}
export declare class EventEmitter {
    static defaultMaxListeners: number;
    events: EmitterEvents;
    eventsOn: Ons<Evs<this>>;
    on: this["eventsOn"];
    addListener: this["on"];
    once: this["on"];
    removeListener: this["on"];
    removeAllListeners(event?: keyof Evs<this>): this;
    setMaxListeners(n: number): this;
    getMaxListeners(): number;
    listeners(event: keyof Evs<this>): Function[];
    emit(event: keyof Evs<this>, ...args: any[]): boolean;
    listenerCount(type: keyof Evs<this>): number;
    // Added in Node 6...
    prependListener: this["on"]
    prependOnceListener: this["on"]
    eventNames(): string[];
}
const binding = require('events');
Object.assign(module.exports, {
    EventEmitter:binding.EventEmitter
});

