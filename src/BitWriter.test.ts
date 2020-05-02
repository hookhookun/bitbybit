import ava from 'ava';
import {createBufferFromBitLength} from './createBuffer';
import {BitWriter} from './BitWriter';
import {toString} from './toString';

ava('Write a value', (t) => {
    const buffer = createBufferFromBitLength(10);
    const writer = new BitWriter(buffer);
    writer.write(0b111, 10);
    const actual = writer.end();
    t.is(actual, buffer);
    t.is(toString(buffer, 0, ''), [
        '0000000111000000',
    ].join('\n'));
});

ava('Write values', (t) => {
    const buffer = createBufferFromBitLength(20);
    const writer = new BitWriter(buffer);
    writer.write(0b111, 5);
    writer.write(0b111, 5);
    writer.write(0b111, 5);
    writer.write(0b111, 5);
    const actual = writer.end();
    t.is(actual, buffer);
    t.is(toString(buffer, 0, ''), [
        '00111',
        '00111',
        '00111',
        '00111',
        '0000',
    ].join(''));
}); 

ava('Write big values', (t) => {
    const buffer = createBufferFromBitLength(44);
    const writer = new BitWriter(buffer);
    writer.write(0b111, 11);
    writer.write(0b111, 11);
    writer.write(0b111, 11);
    writer.write(0b111, 11);
    const actual = writer.end();
    t.is(actual, buffer);
    t.is(toString(buffer, 0, ''), [
        '00000000111',
        '00000000111',
        '00000000111',
        '00000000111',
        '0000',
    ].join(''));
});
