import {WordSize} from './constants';

export const createBufferFromString = (...bits: Array<string>): ArrayBuffer => {
    const source = bits.join('');
    const byteLength = Math.ceil(source.length / WordSize);
    const view = new DataView(new ArrayBuffer(byteLength));
    for (let byteOffset = 0; byteOffset < byteLength; byteOffset++) {
        const bitOffset = byteOffset * WordSize;
        view.setUint8(
            byteOffset,
            Number.parseInt(source.slice(bitOffset, bitOffset + WordSize).padEnd(WordSize, '0'), 2),
        );
    }
    return view.buffer;
};
