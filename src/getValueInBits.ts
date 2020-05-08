export const getValueInBits = (
    byte: number,
    WordSize: number,
    start: number,
    end: number,
): number => Math.floor((byte % (2 ** (WordSize - start))) / (2 ** (WordSize - end)));
