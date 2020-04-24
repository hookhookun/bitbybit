import ava from 'ava';
import {setBitInByte} from './setBitInByte';

const test = (
    byte: number,
    bitOffset: number,
    state: boolean,
    expected?: number,
): void => {
    ava(
        [
            byte.toString(2),
            `${bitOffset}:${state}`,
            '->',
            typeof expected === 'undefined' ? 'Error' : expected.toString(2),
        ].join(' '),
        (t) => {
            if (typeof expected === 'undefined') {
                t.throws(() => setBitInByte(byte, bitOffset, state));
            } else {
                t.is(setBitInByte(byte, bitOffset, state).toString(2), expected.toString(2));
            }
        },
    );
};

test(0b10100010, -1, true);
test(0b101000101, 0, true);
test(0b10100010, 0, true, 0b10100010);
test(0b10100010, 0, false, 0b00100010);
test(0b10100010, 1, false, 0b10100010);
test(0b10100010, 1, true, 0b11100010);
test(0b10100010, 2, true, 0b10100010);
test(0b10100010, 2, false, 0b10000010);
test(0b10100010, 3, false, 0b10100010);
test(0b10100010, 3, true, 0b10110010);
test(0b10100010, 4, false, 0b10100010);
test(0b10100010, 4, true, 0b10101010);
test(0b10100010, 5, false, 0b10100010);
test(0b10100010, 5, true, 0b10100110);
test(0b10100010, 6, true, 0b10100010);
test(0b10100010, 6, false, 0b10100000);
test(0b10100010, 7, false, 0b10100010);
test(0b10100010, 7, true, 0b10100011);
test(0b10100010, 8, true);
