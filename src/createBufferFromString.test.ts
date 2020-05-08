import ava from 'ava';
import {createBufferFromString} from './createBufferFromString';
import {toString} from './toString';

const test = (
    bits: Array<string>,
    expected: Array<number>,
): void => {
    ava(`${bits.join('')}`, (t) => {
        t.is(toString(createBufferFromString(...bits), 8), toString(new Uint8Array(expected).buffer, 8));
    });
};

test(
    [
        '00000000',
        '00000001',
        '00000010',
        '00000011',
        '00000100',
        '00000101',
        '00000110',
        '00000111',
    ],
    [0, 1, 2, 3, 4, 5, 6, 7],
);
