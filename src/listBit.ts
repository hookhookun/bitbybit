import {getBitInByte} from './getBitInByte';

export const listBit = function* (
    buffer: ArrayBuffer,
    startBit = 0,
    endBit = buffer.byteLength * 8,
): Generator<boolean> {
    const view = new DataView(buffer);
    const endByte = Math.ceil(endBit / 8);
    let byteOffset = Math.floor(startBit / 8);
    let bitOffset = startBit % 8;
    while (byteOffset < endByte) {
        const byte = view.getUint8(byteOffset);
        const limit = Math.min(8, endBit - byteOffset * 8);
        while (bitOffset < limit) {
            yield getBitInByte(byte, bitOffset++);
        }
        bitOffset = 0;
        byteOffset++;
    }
};
