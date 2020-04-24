import {getBitInByte} from './getBitInByte';

export const getBit = (
    buffer: ArrayBuffer,
    bitOffset: number,
): boolean => {
    const byteOffset = Math.floor(bitOffset / 8);
    if (buffer.byteLength <= byteOffset) {
        throw new RangeError(`Offset is outside the bounds: ${bitOffset}`);
    }
    return getBitInByte(new DataView(buffer).getUint8(byteOffset), bitOffset % 8);
};
