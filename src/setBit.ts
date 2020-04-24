import {setBitInByte} from './setBitInByte';

export const setBit = (
    buffer: ArrayBuffer,
    bitOffset: number,
    state: boolean,
): void => {
    const byteOffset = Math.floor(bitOffset / 8);
    if (0 <= byteOffset && byteOffset < buffer.byteLength) {
        const view = new DataView(buffer);
        view.setUint8(byteOffset, setBitInByte(view.getUint8(byteOffset), bitOffset % 8, state));
    } else {
        throw new RangeError(`Offset is outside the bounds: ${bitOffset}`);
    }
};
