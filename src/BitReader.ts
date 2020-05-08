import {WordSize} from './constants';
import {getValueInBits} from './getValueInBits';
import {Wrapper} from './Wrapper';

export class BitReader extends Wrapper {

    public read(bitLength: number): number {
        let value = 0;
        while (0 < bitLength) {
            const {bitOffset} = this;
            const size = Math.min(WordSize - bitOffset, bitLength);
            value += getValueInBits(this.byte, WordSize, bitOffset, bitOffset + size);
            bitLength -= size;
            if (0 < bitLength) {
                value *= 2 ** bitLength;
            }
            this.step(size);
        }
        return value;
    }

}
