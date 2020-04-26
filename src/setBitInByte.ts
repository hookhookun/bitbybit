export const setBitInByte = (
    byte: number,
    bitIndex: number,
    bitState: boolean,
): number => {
    if (0 <= bitIndex && bitIndex < 8) {
        if (0 <= byte && byte <= 0xFF) {
            const mask = 1 << (7 - bitIndex);
            return bitState ? (byte | mask) : (byte & ~mask);
        }
        throw new RangeError(`Invalid byte: ${byte}`);
    }
    throw new RangeError(`bitIndex is outside the bounds: ${bitIndex}`);
};
