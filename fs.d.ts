declare module "@ecmal/node/fs" {
    import {EventEmitter,EmitterEvents} from "@ecmal/node/events";
    import {Buffer} from "@ecmal/node/buffer";
    import {Readable,ReadableEvents,Writable,WritableEvents} from "@ecmal/node/stream";

    export class ErrnoException extends Error {
        errno?: number;
        code?: string;
        path?: string;
        syscall?: string;
        stack?: string;
    }
    type FSWatcherEvents = EmitterEvents&{
        change(eventType: string, filename: string | Buffer);
        error(error:Error);
    }
    
    type ReadStreamEvents = ReadableEvents&{
        close();
        open(fd:number);
    } 
    type WriteStreamEvents = WritableEvents&{
        close();
        open(fd:number);
    } 
    interface Stats {
        isFile(): boolean;
        isDirectory(): boolean;
        isBlockDevice(): boolean;
        isCharacterDevice(): boolean;
        isSymbolicLink(): boolean;
        isFIFO(): boolean;
        isSocket(): boolean;
        dev: number;
        ino: number;
        mode: number;
        nlink: number;
        uid: number;
        gid: number;
        rdev: number;
        size: number;
        blksize: number;
        blocks: number;
        atime: Date;
        mtime: Date;
        ctime: Date;
        birthtime: Date;
    }

    export class FSWatcher extends EventEmitter {
        events:FSWatcherEvents;
        close(): void;
    }

    export class ReadStream extends Readable {
        events:ReadStreamEvents;
        close(): void;
        destroy(): void;
        bytesRead: number;
        path: string | Buffer;
    }

    export class WriteStream extends Writable {
        events:WriteStreamEvents;
        close(): void;
        bytesWritten: number;
        path: string | Buffer;
    }

    /**
     * Asynchronous rename.
     * @param oldPath
     * @param newPath
     * @param callback No arguments other than a possible exception are given to the completion callback.
     */
    export function rename(oldPath: string, newPath: string, callback?: (err?: ErrnoException) => void): void;
    /**
     * Synchronous rename
     * @param oldPath
     * @param newPath
     */
    export function renameSync(oldPath: string, newPath: string): void;
    export function truncate(path: string | Buffer, callback?: (err?: ErrnoException) => void): void;
    export function truncate(path: string | Buffer, len: number, callback?: (err?: ErrnoException) => void): void;
    export function truncateSync(path: string | Buffer, len?: number): void;
    export function ftruncate(fd: number, callback?: (err?: ErrnoException) => void): void;
    export function ftruncate(fd: number, len: number, callback?: (err?: ErrnoException) => void): void;
    export function ftruncateSync(fd: number, len?: number): void;
    export function chown(path: string | Buffer, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
    export function chownSync(path: string | Buffer, uid: number, gid: number): void;
    export function fchown(fd: number, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
    export function fchownSync(fd: number, uid: number, gid: number): void;
    export function lchown(path: string | Buffer, uid: number, gid: number, callback?: (err?: ErrnoException) => void): void;
    export function lchownSync(path: string | Buffer, uid: number, gid: number): void;
    export function chmod(path: string | Buffer, mode: number, callback?: (err?: ErrnoException) => void): void;
    export function chmod(path: string | Buffer, mode: string, callback?: (err?: ErrnoException) => void): void;
    export function chmodSync(path: string | Buffer, mode: number): void;
    export function chmodSync(path: string | Buffer, mode: string): void;
    export function fchmod(fd: number, mode: number, callback?: (err?: ErrnoException) => void): void;
    export function fchmod(fd: number, mode: string, callback?: (err?: ErrnoException) => void): void;
    export function fchmodSync(fd: number, mode: number): void;
    export function fchmodSync(fd: number, mode: string): void;
    export function lchmod(path: string | Buffer, mode: number, callback?: (err?: ErrnoException) => void): void;
    export function lchmod(path: string | Buffer, mode: string, callback?: (err?: ErrnoException) => void): void;
    export function lchmodSync(path: string | Buffer, mode: number): void;
    export function lchmodSync(path: string | Buffer, mode: string): void;
    export function stat(path: string | Buffer, callback?: (err: ErrnoException, stats: Stats) => any): void;
    export function lstat(path: string | Buffer, callback?: (err: ErrnoException, stats: Stats) => any): void;
    export function fstat(fd: number, callback?: (err: ErrnoException, stats: Stats) => any): void;
    export function statSync(path: string | Buffer): Stats;
    export function lstatSync(path: string | Buffer): Stats;
    export function fstatSync(fd: number): Stats;
    export function link(srcpath: string | Buffer, dstpath: string | Buffer, callback?: (err?: ErrnoException) => void): void;
    export function linkSync(srcpath: string | Buffer, dstpath: string | Buffer): void;
    export function symlink(srcpath: string | Buffer, dstpath: string | Buffer, type?: string, callback?: (err?: ErrnoException) => void): void;
    export function symlinkSync(srcpath: string | Buffer, dstpath: string | Buffer, type?: string): void;
    export function readlink(path: string | Buffer, callback?: (err: ErrnoException, linkString: string) => any): void;
    export function readlinkSync(path: string | Buffer): string;
    export function realpath(path: string | Buffer, callback?: (err: ErrnoException, resolvedPath: string) => any): void;
    export function realpath(path: string | Buffer, cache: { [path: string]: string }, callback: (err: ErrnoException, resolvedPath: string) => any): void;
    export function realpathSync(path: string | Buffer, cache?: { [path: string]: string }): string;
    /*
    * Asynchronous unlink - deletes the file specified in {path}
    *
    * @param path
    * @param callback No arguments other than a possible exception are given to the completion callback.
    */
    export function unlink(path: string | Buffer, callback?: (err?: ErrnoException) => void): void;
    /*
    * Synchronous unlink - deletes the file specified in {path}
    *
    * @param path
    */
    export function unlinkSync(path: string | Buffer): void;
    /*
    * Asynchronous rmdir - removes the directory specified in {path}
    *
    * @param path
    * @param callback No arguments other than a possible exception are given to the completion callback.
    */
    export function rmdir(path: string | Buffer, callback?: (err?: ErrnoException) => void): void;
    /*
    * Synchronous rmdir - removes the directory specified in {path}
    *
    * @param path
    */
    export function rmdirSync(path: string | Buffer): void;
    /*
    * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
    *
    * @param path
    * @param callback No arguments other than a possible exception are given to the completion callback.
    */
    export function mkdir(path: string | Buffer, callback?: (err?: ErrnoException) => void): void;
    /*
    * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
    *
    * @param path
    * @param mode
    * @param callback No arguments other than a possible exception are given to the completion callback.
    */
    export function mkdir(path: string | Buffer, mode: number, callback?: (err?: ErrnoException) => void): void;
    /*
    * Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
    *
    * @param path
    * @param mode
    * @param callback No arguments other than a possible exception are given to the completion callback.
    */
    export function mkdir(path: string | Buffer, mode: string, callback?: (err?: ErrnoException) => void): void;
    /*
    * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
    *
    * @param path
    * @param mode
    * @param callback No arguments other than a possible exception are given to the completion callback.
    */
    export function mkdirSync(path: string | Buffer, mode?: number): void;
    /*
    * Synchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.
    *
    * @param path
    * @param mode
    * @param callback No arguments other than a possible exception are given to the completion callback.
    */
    export function mkdirSync(path: string | Buffer, mode?: string): void;
    /*
    * Asynchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
    *
    * @param prefix
    * @param callback The created folder path is passed as a string to the callback's second parameter.
    */
    export function mkdtemp(prefix: string, callback?: (err: ErrnoException, folder: string) => void): void;
    /*
    * Synchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.
    *
    * @param prefix
    * @returns Returns the created folder path.
    */
    export function mkdtempSync(prefix: string): string;
    export function readdir(path: string | Buffer, callback?: (err: ErrnoException, files: string[]) => void): void;
    export function readdirSync(path: string | Buffer): string[];
    export function close(fd: number, callback?: (err?: ErrnoException) => void): void;
    export function closeSync(fd: number): void;
    export function open(path: string | Buffer, flags: string | number, callback: (err: ErrnoException, fd: number) => void): void;
    export function open(path: string | Buffer, flags: string | number, mode: number, callback: (err: ErrnoException, fd: number) => void): void;
    export function openSync(path: string | Buffer, flags: string | number, mode?: number): number;
    export function utimes(path: string | Buffer, atime: number, mtime: number, callback?: (err?: ErrnoException) => void): void;
    export function utimes(path: string | Buffer, atime: Date, mtime: Date, callback?: (err?: ErrnoException) => void): void;
    export function utimesSync(path: string | Buffer, atime: number, mtime: number): void;
    export function utimesSync(path: string | Buffer, atime: Date, mtime: Date): void;
    export function futimes(fd: number, atime: number, mtime: number, callback?: (err?: ErrnoException) => void): void;
    export function futimes(fd: number, atime: Date, mtime: Date, callback?: (err?: ErrnoException) => void): void;
    export function futimesSync(fd: number, atime: number, mtime: number): void;
    export function futimesSync(fd: number, atime: Date, mtime: Date): void;
    export function fsync(fd: number, callback?: (err?: ErrnoException) => void): void;
    export function fsyncSync(fd: number): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, buffer: Buffer, offset: number, length: number, callback?: (err: ErrnoException, written: number, buffer: Buffer) => void): void;
    export function write(fd: number, data: any, callback?: (err: ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, callback?: (err: ErrnoException, written: number, str: string) => void): void;
    export function write(fd: number, data: any, offset: number, encoding: string, callback?: (err: ErrnoException, written: number, str: string) => void): void;
    export function writeSync(fd: number, buffer: Buffer, offset: number, length: number, position?: number): number;
    export function writeSync(fd: number, data: any, position?: number, enconding?: string): number;
    export function read(fd: number, buffer: Buffer, offset: number, length: number, position: number, callback?: (err: ErrnoException, bytesRead: number, buffer: Buffer) => void): void;
    export function readSync(fd: number, buffer: Buffer, offset: number, length: number, position: number): number;
    /*
    * Asynchronous readFile - Asynchronously reads the entire contents of a file.
    *
    * @param fileName
    * @param encoding
    * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
    */
    export function readFile(filename: string, encoding: string, callback: (err: ErrnoException, data: string) => void): void;
    /*
    * Asynchronous readFile - Asynchronously reads the entire contents of a file.
    *
    * @param fileName
    * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
    * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
    */
    export function readFile(filename: string, options: { encoding: string; flag?: string; }, callback: (err: ErrnoException, data: string) => void): void;
    /*
    * Asynchronous readFile - Asynchronously reads the entire contents of a file.
    *
    * @param fileName
    * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFile returns a string; otherwise it returns a Buffer.
    * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
    */
    export function readFile(filename: string, options: { flag?: string; }, callback: (err: ErrnoException, data: Buffer) => void): void;
    /*
    * Asynchronous readFile - Asynchronously reads the entire contents of a file.
    *
    * @param fileName
    * @param callback - The callback is passed two arguments (err, data), where data is the contents of the file.
    */
    export function readFile(filename: string, callback: (err: ErrnoException, data: Buffer) => void): void;
    /*
    * Synchronous readFile - Synchronously reads the entire contents of a file.
    *
    * @param fileName
    * @param encoding
    */
    export function readFileSync(filename: string, encoding: string): string;
    /*
    * Synchronous readFile - Synchronously reads the entire contents of a file.
    *
    * @param fileName
    * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
    */
    export function readFileSync(filename: string, options: { encoding: string; flag?: string; }): string;
    /*
    * Synchronous readFile - Synchronously reads the entire contents of a file.
    *
    * @param fileName
    * @param options An object with optional {encoding} and {flag} properties.  If {encoding} is specified, readFileSync returns a string; otherwise it returns a Buffer.
    */
    export function readFileSync(filename: string, options?: { flag?: string; }): Buffer;
    export function writeFile(filename: string, data: any, callback?: (err: ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: ErrnoException) => void): void;
    export function writeFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: ErrnoException) => void): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function writeFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: number; flag?: string; }, callback?: (err: ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, options: { encoding?: string; mode?: string; flag?: string; }, callback?: (err: ErrnoException) => void): void;
    export function appendFile(filename: string, data: any, callback?: (err: ErrnoException) => void): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: number; flag?: string; }): void;
    export function appendFileSync(filename: string, data: any, options?: { encoding?: string; mode?: string; flag?: string; }): void;
    export function watchFile(filename: string, listener: (curr: Stats, prev: Stats) => void): void;
    export function watchFile(filename: string, options: { persistent?: boolean; interval?: number; }, listener: (curr: Stats, prev: Stats) => void): void;
    export function unwatchFile(filename: string, listener?: (curr: Stats, prev: Stats) => void): void;
    export function watch(filename: string, listener?: (event: string, filename: string) => any): FSWatcher;
    export function watch(filename: string, encoding: string, listener?: (event: string, filename: string | Buffer) => any): FSWatcher;
    export function watch(filename: string, options: { persistent?: boolean; recursive?: boolean; encoding?: string }, listener?: (event: string, filename: string | Buffer) => any): FSWatcher;
    export function exists(path: string | Buffer, callback?: (exists: boolean) => void): void;
    export function existsSync(path: string | Buffer): boolean;

    export const constants:{
        // File Access Constants
        /** Constant for fs.access(). File is visible to the calling process. */
        F_OK: number;
        /** Constant for fs.access(). File can be read by the calling process. */
        R_OK: number;

        /** Constant for fs.access(). File can be written by the calling process. */
        W_OK: number;

        /** Constant for fs.access(). File can be executed by the calling process. */
        X_OK: number;

        // File Open Constants

        /** Constant for fs.open(). Flag indicating to open a file for read-only access. */
        O_RDONLY: number;

        /** Constant for fs.open(). Flag indicating to open a file for write-only access. */
        O_WRONLY: number;

        /** Constant for fs.open(). Flag indicating to open a file for read-write access. */
        O_RDWR: number;

        /** Constant for fs.open(). Flag indicating to create the file if it does not already exist. */
        O_CREAT: number;

        /** Constant for fs.open(). Flag indicating that opening a file should fail if the O_CREAT flag is set and the file already exists. */
        O_EXCL: number;

        /** Constant for fs.open(). Flag indicating that if path identifies a terminal device, opening the path shall not cause that terminal to become the controlling terminal for the process (if the process does not already have one). */
        O_NOCTTY: number;

        /** Constant for fs.open(). Flag indicating that if the file exists and is a regular file, and the file is opened successfully for write access, its length shall be truncated to zero. */
        O_TRUNC: number;

        /** Constant for fs.open(). Flag indicating that data will be appended to the end of the file. */
        O_APPEND: number;

        /** Constant for fs.open(). Flag indicating that the open should fail if the path is not a directory. */
        O_DIRECTORY: number;

        /** Constant for fs.open(). Flag indicating reading accesses to the file system will no longer result in an update to the atime information associated with the file. This flag is available on Linux operating systems only. */
        O_NOATIME: number;

        /** Constant for fs.open(). Flag indicating that the open should fail if the path is a symbolic link. */
        O_NOFOLLOW: number;

        /** Constant for fs.open(). Flag indicating that the file is opened for synchronous I/O. */
        O_SYNC: number;

        /** Constant for fs.open(). Flag indicating to open the symbolic link itself rather than the resource it is pointing to. */
        O_SYMLINK: number;

        /** Constant for fs.open(). When set, an attempt will be made to minimize caching effects of file I/O. */
        O_DIRECT: number;

        /** Constant for fs.open(). Flag indicating to open the file in nonblocking mode when possible. */
        O_NONBLOCK: number;

        // File Type Constants

        /** Constant for fs.Stats mode property for determining a file's type. Bit mask used to extract the file type code. */
        S_IFMT: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a regular file. */
        S_IFREG: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a directory. */
        S_IFDIR: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a character-oriented device file. */
        S_IFCHR: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a block-oriented device file. */
        S_IFBLK: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a FIFO/pipe. */
        S_IFIFO: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a symbolic link. */
        S_IFLNK: number;

        /** Constant for fs.Stats mode property for determining a file's type. File type constant for a socket. */
        S_IFSOCK: number;

        // File Mode Constants

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by owner. */
        S_IRWXU: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by owner. */
        S_IRUSR: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by owner. */
        S_IWUSR: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by owner. */
        S_IXUSR: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by group. */
        S_IRWXG: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by group. */
        S_IRGRP: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by group. */
        S_IWGRP: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by group. */
        S_IXGRP: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable, writable and executable by others. */
        S_IRWXO: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating readable by others. */
        S_IROTH: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating writable by others. */
        S_IWOTH: number;

        /** Constant for fs.Stats mode property for determining access permissions for a file. File mode indicating executable by others. */
        S_IXOTH: number;
    }

    /** Tests a user's permissions for the file specified by path. */
    export function access(path: string | Buffer, callback: (err: ErrnoException) => void): void;
    export function access(path: string | Buffer, mode: number, callback: (err: ErrnoException) => void): void;
    /** Synchronous version of fs.access. This throws if any accessibility checks fail, and does nothing otherwise. */
    export function accessSync(path: string | Buffer, mode?: number): void;
    export function createReadStream(path: string | Buffer, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
        start?: number;
        end?: number;
    }): ReadStream;
    export function createWriteStream(path: string | Buffer, options?: {
        flags?: string;
        encoding?: string;
        fd?: number;
        mode?: number;
        autoClose?: boolean;
        start?: number;
    }): WriteStream;
    export function fdatasync(fd: number, callback: Function): void;
    export function fdatasyncSync(fd: number): void;


}