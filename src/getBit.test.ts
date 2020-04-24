import ava from 'ava';
import {getBit} from './getBit';
import {createBufferFromBytes} from './createBuffer';

const test = (
    bytes: Array<number>,
    bitOffset: number,
    expected?: boolean,
): void => {
    const errorIsExpected = typeof expected === 'undefined';
    ava(`${bytes.join(',')} ${bitOffset} -> ${errorIsExpected ? 'Error' : expected}`, (t) => {
        if (errorIsExpected) {
            t.throws(() => getBit(createBufferFromBytes(bytes), bitOffset));
        } else {
            t.deepEqual(getBit(createBufferFromBytes(bytes), bitOffset), expected);
        }
    });
};

test([0, 0b10100010], 8 + 0, true);
test([0, 0b10100010], 8 + 1, false);
test([0, 0b10100010], 8 + 2, true);
test([0, 0b10100010], 8 + 3, false);
test([0, 0b10100010], 8 + 4, false);
test([0, 0b10100010], 8 + 5, false);
test([0, 0b10100010], 8 + 6, true);
test([0, 0b10100010], 8 + 7, false);
test([0, 0b10100010], 8 + 8);
