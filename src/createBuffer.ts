/**
 * If bitLength is 6, then this returns ArrayBuffer of 1 byte.
 * If bitLength is 9, then this returns ArrayBuffer of 2 bytes.
 * @param bitLength number of bits
 */
export const createBufferFromBitLength = (bitLength: number): ArrayBuffer => new Uint8Array(Math.ceil(bitLength / 8)).buffer;

export const createBufferFromBytes = (byteLength: Iterable<number>): ArrayBuffer => new Uint8Array(byteLength).buffer;
