import {WordSize} from './constants';

export class Wrapper {

    public readonly view: DataView;

    protected byteOffset: number;

    protected bitOffset: number;

    public constructor(buffer: ArrayBuffer) {
        this.view = new DataView(buffer);
        this.byteOffset = 0;
        this.bitOffset = 0;
    }

    public get buffer(): ArrayBuffer {
        return this.view.buffer;
    }

    public get byteLength(): number {
        return this.view.byteLength;
    }

    public get bitLength(): number {
        return this.byteLength * WordSize;
    }

    public get byte(): number {
        return this.view.getUint8(this.byteOffset);
    }

    public get bitOffsetFromStart(): number {
        return this.byteOffset * WordSize + this.bitOffset;
    }

    public get done(): boolean {
        return this.byteLength <= this.byteOffset;
    }

    public residualBitLength(): number {
        return this.bitLength - this.bitOffsetFromStart;
    }

    /**
     * @param bitLength Number of bits to proceed.
     * @returns Whether byteOffset is changed.
     */
    protected step(bitLength: number): boolean {
        const bitOffset = this.bitOffset + bitLength;
        this.bitOffset = bitOffset % WordSize;
        this.byteOffset += Math.floor(bitOffset / WordSize);
        const {byteLength, byteOffset} = this;
        if ((byteLength === byteOffset && 0 < this.bitOffset) || byteLength < byteOffset) {
            throw new RangeError('Cannot step out of buffer');
        }
        return WordSize <= bitOffset;
    }

}
