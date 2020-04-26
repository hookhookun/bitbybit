import {listBitHasState} from './listBitHasState';

export const runLength = function* (
    buffer: ArrayBuffer,
    start = 0,
    end = buffer.byteLength * 8,
    startState = false,
): Generator<number> {
    let bitOffset = start;
    let state = startState;
    while (1) {
        state = !state;
        const result = listBitHasState(buffer, state, bitOffset, end).next();
        if (result.done) {
            const lastLength = end - bitOffset;
            if (0 < lastLength) {
                yield end - bitOffset;
            }
            break;
        }
        const nextOffset = result.value;
        yield nextOffset - bitOffset;
        bitOffset = nextOffset;
    }
};
