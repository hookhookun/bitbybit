import ava from 'ava';
import {listBitHasState} from './listBitHasState';
import {createBufferFromBytes} from './createBuffer';

const test = (
    {bytes, state, range, expected}: {
        bytes: Array<number>,
        state: boolean,
        range?: [number, number],
        expected: Array<number>,
    },
): void => {
    let bits = bytes.map((byte) => byte.toString(2).padStart(8, '0')).join('');
    if (range) {
        bits = [
            bits.slice(0, range[0]),
            bits.slice(range[0], range[1]),
            bits.slice(range[1]),
        ].join('|');
    }
    ava(
        `${bits} ${state} -> ${expected.join(',')}`,
        (t) => {
            if (range) {
                t.deepEqual([...listBitHasState(createBufferFromBytes(bytes), state, range[0], range[1])], expected);
            } else {
                t.deepEqual([...listBitHasState(createBufferFromBytes(bytes), state)], expected);
            }
        },
    );
};

test({
    bytes: [0b10010001],
    state: true,
    expected: [0, 3, 7],
});

test({
    bytes: [0b10010001],
    state: true,
    range: [2, 5],
    expected: [3],
});

test({
    bytes: [0b10010001, 0b10111001],
    state: true,
    range: [1, 12],
    expected: [3, 7, 8, 10, 11],
});

test({
    bytes: [0b10010001, 0b10111001],
    state: false,
    range: [1, 12],
    expected: [1, 2, 4, 5, 6, 9],
});
