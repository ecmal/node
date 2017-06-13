
export interface InspectOptions {
    showHidden?: boolean;
    depth?: number;
    colors?: boolean;
    customInspect?: boolean;
    breakLength?: number;
}
export interface inspect {
    (object: any, showHidden?: boolean, depth?: number, color?: boolean): string;
    (object: any, options: InspectOptions): string;
    defaultOptions:InspectOptions,
    custom:symbol,
    colors: {
        'bold': [number, number],
        'italic': [number, number],
        'underline': [number, number],
        'inverse': [number, number],
        'white': [number, number],
        'grey': [number, number],
        'black': [number, number],
        'blue': [number, number],
        'cyan': [number, number],
        'green': [number, number],
        'magenta': [number, number],
        'red': [number, number],
        'yellow': [number, number]
    }
    styles: {
        'special': 'cyan',
        'number': 'yellow',
        'boolean': 'yellow',
        'undefined': 'grey',
        'null': 'bold',
        'string': 'green',
        'symbol': 'green',
        'date': 'magenta',
        // "name": intentionally not styling
        'regexp': 'red'
    }
}

export declare function format(format: any, ...param: any[]): string;
export declare function debug(string: string): void;
export declare function error(...param: any[]): void;
export declare function puts(...param: any[]): void;
export declare function print(...param: any[]): void;
export declare function log(string: string): void;
export declare function isArray(object: any): boolean;
export declare function isRegExp(object: any): boolean;
export declare function isDate(object: any): boolean;
export declare function isError(object: any): boolean;
export declare function inherits(constructor: any, superConstructor: any): void;
export declare function debuglog(key: string): (msg: string, ...param: any[]) => void;
export declare function isBoolean(object: any): boolean;
export declare function isBuffer(object: any): boolean;
export declare function isFunction(object: any): boolean;
export declare function isNull(object: any): boolean;
export declare function isNullOrUndefined(object: any): boolean;
export declare function isNumber(object: any): boolean;
export declare function isObject(object: any): boolean;
export declare function isPrimitive(object: any): boolean;
export declare function isString(object: any): boolean;
export declare function isSymbol(object: any): boolean;
export declare function isUndefined(object: any): boolean;
export declare function deprecate(fn: Function, message: string): Function;
export declare const inspect:inspect;

Object.assign(module.exports, require('util'));

