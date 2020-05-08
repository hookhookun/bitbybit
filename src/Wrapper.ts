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

    protected get byteLength(): number {
        return this.view.byteLength;
    }

    protected get byte(): number {
        return this.view.getUint8(this.byteOffset);
    }

    protected get bitOffsetFromStart(): number {
        return this.byteOffset * WordSize + this.bitOffset;
    }

    public get done(): boolean {
        return this.byteLength <= this.byteOffset;
    }

    /**
     * @param bitLength Number of bits to proceed.
     * @returns Whether byteOffset is changed.
     */
    protected step(bitLength: number): boolean {
        const bitOffset = this.bitOffset + bitLength;
        this.byteOffset += Math.floor(bitOffset / WordSize);
        this.bitOffset = bitOffset % WordSize;
        return WordSize <= bitOffset;
    }

}
