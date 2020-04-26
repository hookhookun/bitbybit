import {getBitInByte} from './getBitInByte';

export const listBit = function* (
    buffer: ArrayBuffer,
    start = 0,
    end = buffer.byteLength * 8,
): Generator<boolean> {
    const view = new DataView(buffer);
    const endByte = Math.ceil(end / 8);
    let byteOffset = Math.floor(start / 8);
    let bitOffset = start % 8;
    while (byteOffset < endByte) {
        const byte = view.getUint8(byteOffset);
        const limit = Math.min(8, end - byteOffset * 8);
        while (bitOffset < limit) {
            yield getBitInByte(byte, bitOffset++);
        }
        bitOffset = 0;
        byteOffset++;
    }
};
