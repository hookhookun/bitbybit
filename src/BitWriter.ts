import {WordSize} from './constants';
import {Wrapper} from './Wrapper';
import {getValueInBits} from './getValueInBits';

export class BitWriter extends Wrapper {

    private tempByte: number;

    public constructor(buffer: ArrayBuffer) {
        super(buffer);
        this.tempByte = 0;
    }

    public get buffer(): ArrayBuffer {
        return this.view.buffer;
    }

    public write(value: number, bitLength: number): void {
        const {view} = this;
        let consumed = 0;
        while (consumed < bitLength) {
            const {bitOffset, byteOffset} = this;
            const size = Math.min(WordSize - bitOffset, bitLength - consumed);
            this.tempByte += getValueInBits(value, bitLength, consumed, consumed + size) * (2 ** (WordSize - (bitOffset + size)));
            consumed += size;
            if (this.step(size)) {
                view.setUint8(byteOffset, this.tempByte);
                this.tempByte = 0;
            }
        }
    }

    public end(): ArrayBuffer {
        if (!this.done && 0 < this.bitOffset) {
            this.view.setUint8(this.byteOffset, this.tempByte);
        }
        return this.buffer;
    }

}
