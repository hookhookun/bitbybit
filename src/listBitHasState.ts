import {getBitInByte} from './getBitInByte';

export const listBitHasState = function* (
    buffer: ArrayBuffer,
    state: boolean,
    start = 0,
    end = buffer.byteLength * 8,
): Generator<number> {
    const skip = state ? 0x00 : 0xFF;
    const view = new DataView(buffer);
    let bitOffset = start;
    while (bitOffset < end) {
        const byte = view.getUint8(bitOffset >>> 3);
        const next = Math.min(bitOffset + 8 - (bitOffset % 8), end);
        if (byte === skip) {
            bitOffset = next;
        } else {
            while (bitOffset < next) {
                if (getBitInByte(byte, bitOffset) === state) {
                    yield bitOffset;
                }
                bitOffset++;
            }
        }
    }
};
