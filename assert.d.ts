declare namespace Ecmal.Node.Assert {
    export class AssertionError extends Error {
        name:"AssertionError";
        actual:any;
        expected:any;
        operator?: string;
        constructor(options?: {
            message?: string; 
            actual?: any; 
            expected?: any;
            operator?: string; 
            stackStartFunction?: Function
        })
    }
    export function fail(actual: any, expected: any, message: string, operator: string): void;
    export function ok(value: any, message?: string): void;
    export function equal(actual: any, expected: any, message?: string): void;
    export function notEqual(actual: any, expected: any, message?: string): void;
    export function deepEqual(actual: any, expected: any, message?: string): void;
    export function notDeepEqual(acutal: any, expected: any, message?: string): void;
    export function strictEqual(actual: any, expected: any, message?: string): void;
    export function notStrictEqual(actual: any, expected: any, message?: string): void;
    export function deepStrictEqual(actual: any, expected: any, message?: string): void;
    export function notDeepStrictEqual(actual: any, expected: any, message?: string): void;
    export function throws(block: Function, message?: string): void;
    export function throws(block: Function, error: Function, message?: string): void;
    export function throws(block: Function, error: RegExp, message?: string): void;
    export function throws(block: Function, error: (err: any) => boolean, message?: string): void;
    export function doesNotThrow(block: Function, message?: string): void;
    export function doesNotThrow(block: Function, error: Function, message?: string): void;
    export function doesNotThrow(block: Function, error: RegExp, message?: string): void;
    export function doesNotThrow(block: Function, error: (err: any) => boolean, message?: string): void;
    export function ifError(value: any): void;
}
