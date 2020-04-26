import {setBitInByte} from './setBitInByte';

export const setBit = (
    buffer: ArrayBuffer,
    bitOffset: number,
    bitState: boolean,
): void => {
    const byteOffset = Math.floor(bitOffset / 8);
    if (0 <= byteOffset && byteOffset < buffer.byteLength) {
        const view = new DataView(buffer);
        view.setUint8(byteOffset, setBitInByte(view.getUint8(byteOffset), bitOffset % 8, bitState));
    } else {
        throw new RangeError(`Offset is outside the bounds: ${bitOffset}`);
    }
};
