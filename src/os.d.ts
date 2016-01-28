///<reference path="index.d.ts"/>
export function tmpdir(): string;
export function hostname(): string;
export function type(): string;
export function platform(): string;
export function arch(): string;
export function release(): string;
export function uptime(): number;
export function loadavg(): number[];
export function totalmem(): number;
export function freemem(): number;
export function cpus(): { model: string; speed: number; times: { user: number; nice: number; sys: number; idle: number; irq: number; }; }[];
export function networkInterfaces(): any;
export var EOL: string;