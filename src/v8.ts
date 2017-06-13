export interface HeapSpaceInfo {
    space_name: string;
    space_size: number;
    space_used_size: number;
    space_available_size: number;
    physical_space_size: number;
}

//** Signifies if the --zap_code_space option is enabled or not.  1 == enabled, 0 == disabled. */
export type DoesZapCodeSpaceFlag = 0 | 1;

export interface HeapInfo {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: DoesZapCodeSpaceFlag;
}

export declare function getHeapStatistics(): HeapInfo;
export declare function getHeapSpaceStatistics(): HeapSpaceInfo[];
export declare function setFlagsFromString(flags: string): void;

Object.assign(module.exports, require('v8'));