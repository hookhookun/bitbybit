const WordSize = 8;

export class BitWriter {

    public readonly view: DataView;

    private byteOffset: number;

    private bitOffset: number;

    private byte: number;

    public constructor(buffer: ArrayBuffer) {
        this.view = new DataView(buffer);
        this.byteOffset = 0;
        this.bitOffset = 0;
        this.byte = 0;
    }

    public get buffer(): ArrayBuffer {
        return this.view.buffer;
    }

    public write(value: number, bitLength: number): void {
        const {view} = this;
        let {byte, bitOffset, byteOffset} = this;
        while (0 < bitLength) {
            const size = Math.min(WordSize - bitOffset, bitLength);
            bitOffset += size;
            byte += Math.floor(value / (2 ** (bitLength - size))) * (2 ** (WordSize - bitOffset));
            if (bitOffset === WordSize) {
                view.setUint8(byteOffset, byte);
                byte = bitOffset = 0;
                byteOffset++;
            }
            bitLength -= size;
        }
        this.byte = byte;
        this.bitOffset = bitOffset;
        this.byteOffset = byteOffset;
    }

    public end(): ArrayBuffer {
        if (0 < this.bitOffset) {
            this.view.setUint8(this.byteOffset, this.byte);
        }
        return this.buffer;
    }

}
