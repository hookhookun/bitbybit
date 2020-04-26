import {getBitInByte} from './getBitInByte';

export const listBitHasState = function* (
    buffer: ArrayBuffer,
    state: boolean,
    start = 0,
    end = buffer.byteLength * 8,
): Generator<number> {
    const skip = state ? 0x00 : 0xFF;
    const view = new DataView(buffer);
    const endByte = Math.ceil(end / 8);
    let byteOffset = Math.floor(start / 8);
    let bitIndex = start % 8;
    while (byteOffset < endByte) {
        const byte = view.getUint8(byteOffset);
        if (byte !== skip) {
            const bitOffset = byteOffset * 8;
            while (bitIndex < Math.min(8, end - bitOffset)) {
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
