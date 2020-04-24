export const createBufferFromBitLength = (size: number): ArrayBuffer => new Uint8Array(Math.ceil(size / 8)).buffer;
export const createBufferFromBytes = (bytes: Iterable<number>): ArrayBuffer => new Uint8Array(bytes).buffer;
