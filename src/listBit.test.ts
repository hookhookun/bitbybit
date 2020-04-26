import ava from 'ava';
import {listBit} from './listBit';
import {createBufferFromBytes} from './createBuffer';

const toString = (bits: Iterable<boolean>): string => [...bits]
.map((bit) => bit ? '1' : '0')
.join('');

const test = (
    {bytes, range, expected}: {
        bytes: Array<number>,
        range?: [number, number],
        expected: string,
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
        `${bits} -> ${expected}`,
        (t) => {
            if (range) {
                t.deepEqual(toString(listBit(createBufferFromBytes(bytes), range[0], range[1])), expected);
            } else {
                t.deepEqual(toString(listBit(createBufferFromBytes(bytes))), expected);
            }
        },
    );
};

test({
    bytes: [0b10010001],
    expected: '10010001',
});

test({
    bytes: [0b10010001],
    range: [1, 5],
    expected: '0010',
});

test({
    bytes: [0b10010001, 0b10111001],
    range: [4, 12],
    expected: '00011011',
});
