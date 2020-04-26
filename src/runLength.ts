import {listBitHasState} from './listBitHasState';

export const runLength = function* (
    buffer: ArrayBuffer,
    startBit = 0,
    endBit = buffer.byteLength * 8,
    startState = false,
): Generator<number> {
    let bitOffset = startBit;
    let state = startState;
    while (1) {
        state = !state;
        const result = listBitHasState(buffer, state, bitOffset, endBit).next();
        if (result.done) {
            const lastLength = endBit - bitOffset;
            if (0 < lastLength) {
                yield endBit - bitOffset;
            }
            break;
        }
        const nextOffset = result.value;
        yield nextOffset - bitOffset;
        bitOffset = nextOffset;
    }
};
