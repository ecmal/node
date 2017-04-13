/// <reference path="./assert.d.ts"/>
/// <reference path="./events.d.ts"/>
/// <reference path="./buffer.d.ts"/>
/// <reference path="./net.d.ts"/>
/// <reference path="./child_process.d.ts"/>
/// <reference path="./cluster.d.ts"/>
/// <reference path="./console.d.ts"/>
/// <reference path="./constants.d.ts"/>
/// <reference path="./crypto.d.ts"/>
/// <reference path="./dgram.d.ts"/>
/// <reference path="./dns.d.ts"/>
/// <reference path="./fs.d.ts"/>
/// <reference path="./http.d.ts"/>
/// <reference path="./https.d.ts"/>
/// <reference path="./os.d.ts"/>
/// <reference path="./path.d.ts"/>
/// <reference path="./process.d.ts"/>
/// <reference path="./punycode.d.ts"/>
/// <reference path="./querystring.d.ts"/>
/// <reference path="./readline.d.ts"/>
/// <reference path="./repl.d.ts" />
/// <reference path="./stream.d.ts"/>
/// <reference path="./string_decoder.d.ts"/>
/// <reference path="./timers.d.ts"/>
/// <reference path="./tls.d.ts"/>
/// <reference path="./tty.d.ts"/>
/// <reference path="./url.d.ts"/>
/// <reference path="./util.d.ts"/>
/// <reference path="./v8.d.ts"/>
/// <reference path="./vm.d.ts"/>
/// <reference path="./zlib.d.ts"/>


interface Error {
    stack?: string;
}
interface ErrorConstructor {
    captureStackTrace(targetObject: Object, constructorOpt?: Function): void;
    stackTraceLimit: number;
}

/************************************************
*                                               *
*                   GLOBAL                      *
*                                               *
************************************************/


declare var process:NodeProcess;
declare var global:any;

declare var __filename: string;
declare var __dirname: string;

interface NodeProcess {

}
interface NodeModule {
    exports: any;
    require: NodeRequire;
    id: string;
    filename: string;
    loaded: boolean;
    parent: NodeModule | null;
    children: NodeModule[];
}
interface NodeRequire {
    cache: any;
    extensions: any;
    main : NodeModule | undefined;
    resolve(id: string): string;   
    (id: string): any;
}
declare var require: NodeRequire;
declare var module: NodeModule;
// Same as module.exports
declare var exports: any;


