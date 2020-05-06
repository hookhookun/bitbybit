import ava from 'ava';
import {toString} from './toString';

const test = (
    values: Array<number>,
    expected: Array<string>,
    bitsPerLine?: number,
): void => {
    const hex = values.map((x) => x.toString(16).padStart(2, '0')).join('-');
    ava(`${hex} ${bitsPerLine || 4}`, (t) => {
        t.is(toString(new Uint8Array(values).buffer, bitsPerLine), expected.join('\n'));
    });
};

test([0, 1, 2, 3, 4, 5, 6, 7], [
    '00000000000000010000001000000011',
    '00000100000001010000011000000111',
]);

test([0, 1, 2, 3, 4, 5, 6, 7], [
    '00000000',
    '00000001',
    '00000010',
    '00000011',
    '00000100',
    '00000101',
    '00000110',
    '00000111',
], 8);
