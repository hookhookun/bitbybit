import ava from 'ava';
import {getBitInByte} from './getBitInByte';

const test = (
    byte: number,
    bitOffset: number,
    expected?: boolean,
): void => {
    const errorIsExpected = typeof expected === 'undefined';
    ava(`0b${byte.toString(2)} ${bitOffset} -> ${errorIsExpected ? 'Error' : expected}`, (t) => {
        if (errorIsExpected) {
            t.throws(() => getBitInByte(byte, bitOffset));
        } else {
            t.deepEqual(getBitInByte(byte, bitOffset), expected);
        }
    });
};

for (let byte = 0; byte < 2; byte++) {
    const offset = byte * 8;
    test(0b10100010, offset + 0, true);
    test(0b10100010, offset + 1, false);
    test(0b10100010, offset + 2, true);
    test(0b10100010, offset + 3, false);
    test(0b10100010, offset + 4, false);
    test(0b10100010, offset + 5, false);
    test(0b10100010, offset + 6, true);
    test(0b10100010, offset + 7, false);
}
