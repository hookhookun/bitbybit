import ava from 'ava';
import {getValueInBits} from './getValueInBits';
import {WordSize} from './constants';

const test = (
    byte: number,
    WordSize: number,
    start: number,
    end: number,
    expected: number,
): void => {
    ava(`0b${byte.toString(2).padStart(WordSize, '0')} (${WordSize}) ${start}:${end} -> ${expected}`, (t) => {
        t.is(getValueInBits(byte, WordSize, start, end), expected);
    });
};

test(0b10100010, WordSize, 0, 0, 0b0);
test(0b10100010, WordSize, 0, 1, 0b1);
test(0b10100010, WordSize, 0, 2, 0b10);
test(0b10100010, WordSize, 0, 3, 0b101);
test(0b10100010, WordSize, 0, 4, 0b1010);
test(0b10100010, WordSize, 0, 5, 0b10100);
test(0b10100010, WordSize, 0, 6, 0b101000);
test(0b10100010, WordSize, 0, 7, 0b1010001);
test(0b10100010, WordSize, 0, 8, 0b10100010);
test(0b10100010, WordSize, 1, 8, 0b0100010);
test(0b10100010, WordSize, 2, 8, 0b100010);
test(0b10100010, WordSize, 3, 8, 0b00010);
test(0b10100010, WordSize, 4, 8, 0b0010);
test(0b10100010, WordSize, 5, 8, 0b010);
test(0b10100010, WordSize, 6, 8, 0b10);
test(0b10100010, WordSize, 7, 8, 0b0);
test(0b10100010, WordSize, 8, 8, 0b0);

test(0b00001111100000, 14, 5, 10, 0b11110);
