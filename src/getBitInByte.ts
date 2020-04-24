export const getBitInByte = (
    byte: number,
    offset: number,
): boolean => Boolean((byte >>> (7 - (offset % 8))) % 2);
