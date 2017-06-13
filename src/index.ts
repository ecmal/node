declare var process:NodeProcess;
declare var global:any;

declare var __filename: string;
declare var __dirname: string;

interface NodeProcess {}
interface NodeRequire {
    resolve(id: string): string;   
    (id: string): any;
}
declare var require: NodeRequire;
