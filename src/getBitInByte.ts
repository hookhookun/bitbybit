export const getBitInByte = (
    byte: number,
    bitIndex: number,
): boolean => Boolean((byte >>> (7 - (bitIndex % 8))) % 2);
