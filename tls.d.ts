declare module "@ecmal/node/tls" {
    import {Buffer} from "@ecmal/node/buffer";
    import * as Crypto from "@ecmal/node/crypto";
    import {Duplex} from "@ecmal/node/stream";
    import {Socket as NetSocket} from "@ecmal/node/net";
    import {Server as NetServer} from "@ecmal/node/net";
    import {SocketEvents as NetSocketEvents} from "@ecmal/node/net";
    import {ServerEvents as NetServerEvents} from "@ecmal/node/net";

    var CLIENT_RENEG_LIMIT: number;
    var CLIENT_RENEG_WINDOW: number;
    type SocketEvents = NetSocketEvents&{
        OCSPResponse(response: Buffer): void;
        secureConnect(): void;
    }
    type ServerEvents = NetServerEvents&{
        tlsClientError(err: Error, tlsSocket: TLSSocket): void;
        newSession(sessionId: any, sessionData: any, callback: (err: Error, resp: Buffer) => void): void;
        OCSPRequest(certificate: Buffer, issuer: Buffer, callback: Function): void;
        resumeSession(sessionId: any, callback: (err: Error, sessionData: any) => void): void;
        secureConnection(tlsSocket: TLSSocket): void;
    }
    export interface Certificate {
        /**
         * Country code.
         */
        C: string;
        /**
         * Street.
         */
        ST: string;
        /**
         * Locality.
         */
        L: string;
        /**
         * Organization.
         */
        O: string;
        /**
         * Organizational unit.
         */
        OU: string;
        /**
         * Common name.
         */
        CN: string;
    }
    export interface CipherNameAndProtocol {
        /**
         * The cipher name.
         */
        name: string;
        /**
         * SSL/TLS protocol version.
         */
        version: string;
    }
    export interface PeerCertificate {
        subject: Certificate;
        issuerInfo: Certificate;
        issuer: Certificate;
        raw: any;
        valid_from: string;
        valid_to: string;
        fingerprint: string;
        serialNumber: string;
    }
    export interface SocketOptions {
        /**
         * An optional TLS context object from tls.createSecureContext()
         */
        secureContext?: SecureContext,
        /**
         * If true the TLS socket will be instantiated in server-mode.
         * Defaults to false.
         */
        isServer?: boolean,
        /**
         * An optional NetServer instance.
         */
        server?: NetServer,
        /**
         * If true the server will request a certificate from clients that
         * connect and attempt to verify that certificate. Defaults to
         * false.
         */
        requestCert?: boolean,
        /**
         * If true the server will reject any connection which is not
         * authorized with the list of supplied CAs. This option only has an
         * effect if requestCert is true. Defaults to false.
         */
        rejectUnauthorized?: boolean,
        /**
         * An array of strings or a Buffer naming possible NPN protocols.
         * (Protocols should be ordered by their priority.)
         */
        NPNProtocols?: string[] | Buffer,
        /**
         * An array of strings or a Buffer naming possible ALPN protocols.
         * (Protocols should be ordered by their priority.) When the server
         * receives both NPN and ALPN extensions from the client, ALPN takes
         * precedence over NPN and the server does not send an NPN extension
         * to the client.
         */
        ALPNProtocols?: string[] | Buffer,
        /**
         * SNICallback(servername, cb) <Function> A function that will be
         * called if the client supports SNI TLS extension. Two arguments
         * will be passed when called: servername and cb. SNICallback should
         * invoke cb(null, ctx), where ctx is a SecureContext instance.
         * (tls.createSecureContext(...) can be used to get a proper
         * SecureContext.) If SNICallback wasn't provided the default callback
         * with high-level API will be used (see below).
         */
        SNICallback?: Function,
        /**
         * An optional Buffer instance containing a TLS session.
         */
        session?: Buffer,
        /**
         * If true, specifies that the OCSP status request extension will be
         * added to the client hello and an 'OCSPResponse' event will be
         * emitted on the socket before establishing a secure communication
         */
        requestOCSP?: boolean
    }
    export interface TlsOptions {
        host?: string;
        port?: number;
        pfx?: string | Buffer[];
        key?: string | string[] | Buffer | any[];
        passphrase?: string;
        cert?: string | string[] | Buffer | Buffer[];
        ca?: string | string[] | Buffer | Buffer[];
        crl?: string | string[];
        ciphers?: string;
        honorCipherOrder?: boolean;
        requestCert?: boolean;
        rejectUnauthorized?: boolean;
        NPNProtocols?: string[] | Buffer;
        SNICallback?: (servername: string, cb: (err: Error, ctx: SecureContext) => any) => any;
        ecdhCurve?: string;
        dhparam?: string | Buffer;
        handshakeTimeout?: number;
        ALPNProtocols?: string[] | Buffer;
        sessionTimeout?: number;
        ticketKeys?: any;
        sessionIdContext?: string;
        secureProtocol?: string;
    }
    export interface ConnectionOptions {
        host?: string;
        port?: number;
        socket?: NetSocket;
        pfx?: string | Buffer
        key?: string | string[] | Buffer | Buffer[];
        passphrase?: string;
        cert?: string | string[] | Buffer | Buffer[];
        ca?: string | Buffer | (string | Buffer)[];
        rejectUnauthorized?: boolean;
        NPNProtocols?: (string | Buffer)[];
        servername?: string;
        path?: string;
        ALPNProtocols?: (string | Buffer)[];
        checkServerIdentity?: (servername: string, cert: string | Buffer | (string | Buffer)[]) => any;
        secureProtocol?: string;
        secureContext?: Object;
        session?: Buffer;
        minDHSize?: number;
    }
    export interface ClearTextStream extends Duplex {
        authorized: boolean;
        authorizationError: Error;
        getPeerCertificate(): any;
        getCipher: {
            name: string;
            version: string;
        };
        address: {
            port: number;
            family: string;
            address: string;
        };
        remoteAddress: string;
        remotePort: number;
    }
    export interface SecurePair {
        encrypted: any;
        cleartext: any;
    }
    export interface SecureContextOptions {
        pfx?: string | Buffer;
        key?: string | Buffer;
        passphrase?: string;
        cert?: string | Buffer;
        ca?: string | Buffer;
        crl?: string | string[]
        ciphers?: string;
        honorCipherOrder?: boolean;
    }
    export interface SecureContext {
        context: any;
    }
    export class TLSSocket extends NetSocket {
        events:SocketEvents;
        /**
         * Construct a new tls.TLSSocket object from an existing TCP socket.
         */
        constructor(socket: NetSocket, options?:SocketOptions);
        
        /**
         * A boolean that is true if the peer certificate was signed by one of the specified CAs, otherwise false.
         */
        authorized: boolean;
        /**
         * The reason why the peer's certificate has not been verified.
         * This property becomes available only when tlsSocket.authorized === false.
         */
        authorizationError: Error;
        /**
         * Static boolean value, always true.
         * May be used to distinguish TLS sockets from regular ones.
         */
        encrypted: boolean;
        /**
         * Returns the bound address, the address family name and port of the underlying socket as reported by
         * the operating system.
         * @returns {any} - An object with three properties, e.g. { port: 12346, family: 'IPv4', address: '127.0.0.1' }.
         */
        address(): { port: number; family: string; address: string };
        /**
         * Returns an object representing the cipher name and the SSL/TLS protocol version of the current connection.
         * @returns {CipherNameAndProtocol} - Returns an object representing the cipher name
         * and the SSL/TLS protocol version of the current connection.
         */
        getCipher(): CipherNameAndProtocol;
        /**
         * Returns an object representing the peer's certificate.
         * The returned object has some properties corresponding to the field of the certificate.
         * If detailed argument is true the full chain with issuer property will be returned,
         * if false only the top certificate without issuer property.
         * If the peer does not provide a certificate, it returns null or an empty object.
         * @param {boolean} detailed - If true; the full chain with issuer property will be returned.
         * @returns {any} - An object representing the peer's certificate.
         */
        getPeerCertificate(detailed?: boolean): PeerCertificate;
        /**
         * Could be used to speed up handshake establishment when reconnecting to the server.
         * @returns {any} - ASN.1 encoded TLS session or undefined if none was negotiated.
         */
        getSession(): any;
        /**
         * NOTE: Works only with client TLS sockets.
         * Useful only for debugging, for session reuse provide session option to tls.connect().
         * @returns {any} - TLS session ticket or undefined if none was negotiated.
         */
        getTLSTicket(): any;
        /**
         * The string representation of the local IP address.
         */
        localAddress: string;
        /**
         * The numeric representation of the local port.
         */
        localPort: number;
        /**
         * The string representation of the remote IP address.
         * For example, '74.125.127.100' or '2001:4860:a005::68'.
         */
        remoteAddress: string;
        /**
         * The string representation of the remote IP family. 'IPv4' or 'IPv6'.
         */
        remoteFamily: string;
        /**
         * The numeric representation of the remote port. For example, 443.
         */
        remotePort: number;
        /**
         * Initiate TLS renegotiation process.
         *
         * NOTE: Can be used to request peer's certificate after the secure connection has been established.
         * ANOTHER NOTE: When running as the server, socket will be destroyed with an error after handshakeTimeout timeout.
         * @param {TlsOptions} options - The options may contain the following fields: rejectUnauthorized,
         * requestCert (See tls.createServer() for details).
         * @param {Function} callback - callback(err) will be executed with null as err, once the renegotiation
         * is successfully completed.
         */
        renegotiate(options: TlsOptions, callback: (err: Error) => any): any;
        /**
         * Set maximum TLS fragment size (default and maximum value is: 16384, minimum is: 512).
         * Smaller fragment size decreases buffering latency on the client: large fragments are buffered by
         * the TLS layer until the entire fragment is received and its integrity is verified;
         * large fragments can span multiple roundtrips, and their processing can be delayed due to packet
         * loss or reordering. However, smaller fragments add extra TLS framing bytes and CPU overhead,
         * which may decrease overall server throughput.
         * @param {number} size - TLS fragment size (default and maximum value is: 16384, minimum is: 512).
         * @returns {boolean} - Returns true on success, false otherwise.
         */
        setMaxSendFragment(size: number): boolean;

    }
    export class Server extends NetServer {
        close(callback?: Function): Server;
        address(): { port: number; family: string; address: string; };
        addContext(hostName: string, credentials: {
            key: string;
            cert: string;
            ca: string;
        }): void;
        maxConnections: number;
        connections: number;
    }

    export function createServer(options: TlsOptions, secureConnectionListener?: (socket: TLSSocket) => void): Server;
    export function connect(options: ConnectionOptions, secureConnectionListener?: () => void): TLSSocket;
    export function connect(port: number, host?: string, options?: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    export function connect(port: number, options?: ConnectionOptions, secureConnectListener?: () => void): TLSSocket;
    export function createSecurePair(credentials?: Crypto.Credentials, isServer?: boolean, requestCert?: boolean, rejectUnauthorized?: boolean): SecurePair;
    export function createSecureContext(details: SecureContextOptions): SecureContext;
}