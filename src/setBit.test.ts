import ava from 'ava';
import {getBit} from './getBit';
import {setBit} from './setBit';
import {createBufferFromBytes} from './createBuffer';

const test = (
    bytes: Array<number>,
    bitOffset: number,
    state?: boolean,
): void => {
    const errorIsExpected = typeof state === 'undefined';
    ava(
        [
            bytes.join(','),
            `${bitOffset}:${errorIsExpected ? true : state}`,
            '->',
            errorIsExpected ? 'Error' : state,
        ].join(' '),
        (t) => {
            if (typeof state === 'undefined') {
                t.throws(() => setBit(createBufferFromBytes(bytes), bitOffset, true));
            } else {
                const array = createBufferFromBytes(bytes);
                setBit(array, bitOffset, state);
                t.is(getBit(array, bitOffset), state);
            }
        },
    );
};

test([0, 0b10100010], -1);
for (let bitOffset = 0; bitOffset < 8; bitOffset++) {
    test([0, 0b10100010], 8 + bitOffset, true);
    test([0, 0b10100010], 8 + bitOffset, false);
}
test([0, 0b10100010], 8 + 8);
