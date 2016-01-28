///<reference path="index.d.ts"/>
export function stringify(obj: any, sep?: string, eq?: string): string;
export function parse(str: string, sep?: string, eq?: string, options?: { maxKeys?: number; }): any;
export function escape(str: string): string;
export function unescape(str: string): string;