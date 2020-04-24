export const setBitInByte = (
    byte: number,
    offset: number,
    state: boolean,
): number => {
    if (0 <= offset && offset < 8) {
        if (0 <= byte && byte <= 0xFF) {
            const mask = 1 << (7 - offset);
            return state ? (byte | mask) : (byte & ~mask);
        }
        throw new RangeError(`Invalid byte: ${byte}`);
    }
    throw new RangeError(`Offset is outside the bounds: ${offset}`);
};
