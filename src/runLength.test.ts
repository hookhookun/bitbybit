import ava from 'ava';
import {runLength} from './runLength';
import {createBufferFromBytes} from './createBuffer';

const test = (
    {bytes, range, expected, startState}: {
        bytes: Array<number>,
        range?: [number, number],
        expected: Array<number>,
        startState?: boolean,
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
        `${bits} ${startState} -> ${expected}`,
        (t) => {
            if (range) {
                t.deepEqual([...runLength(createBufferFromBytes(bytes), range[0], range[1], startState)], expected);
            } else {
                t.deepEqual([...runLength(createBufferFromBytes(bytes))], expected);
            }
        },
    );
};

test({
    bytes: [0b10010001],
    expected: [0, 1, 2, 1, 3, 1],
});

test({
    bytes: [0b10010001],
    range: [1, 5],
    expected: [2, 1, 1],
});

test({
    bytes: [0b10010001],
    startState: true,
    range: [1, 5],
    expected: [0, 2, 1, 1],
});

test({
    bytes: [0b10010001, 0b10111001],
    range: [4, 12],
    expected: [3, 2, 1, 2],
});

test({
    bytes: [0b10010001, 0b10111001],
    startState: true,
    range: [4, 12],
    expected: [0, 3, 2, 1, 2],
});
