import ava from 'ava';
import {BitReader} from './BitReader';
import {createBufferFromString} from './createBufferFromString';

ava('Read values', (t) => {
    const chunks = [
        '',
        '1',
        '10',
        '010',
        '1010',
    ];
    const buffer = createBufferFromString(...chunks);
    const reader = new BitReader(buffer);
    for (const chunk of chunks) {
        const actual = reader.read(chunk.length);
        const expected = Number.parseInt(`0${chunk}`, 2);
        t.is(actual, expected);
    }
});
