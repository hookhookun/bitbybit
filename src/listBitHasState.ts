import {getBitInByte} from './getBitInByte';

export const listBitHasState = function* (
    buffer: ArrayBuffer,
    state: boolean,
    startBit = 0,
    endBit = buffer.byteLength * 8,
): Generator<number> {
    const skip = state ? 0x00 : 0xFF;
    const view = new DataView(buffer);
    const endByte = Math.ceil(endBit / 8);
    let byteOffset = Math.floor(startBit / 8);
    let bitIndex = startBit % 8;
    while (byteOffset < endByte) {
        const byte = view.getUint8(byteOffset);
        if (byte !== skip) {
            const bitOffset = byteOffset * 8;
            while (bitIndex < Math.min(8, endBit - bitOffset)) {
                if (getBitInByte(byte, bitIndex) === state) {
                    yield bitOffset + bitIndex;
                }
                bitIndex++;
            }
        }
        bitIndex = 0;
        byteOffset++;
    }
};
