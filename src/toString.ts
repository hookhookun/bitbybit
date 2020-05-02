export const toString = (
    buffer: ArrayBuffer,
    bytesPerLine = 4,
    delimiter = ' ',
): string => {
    const lines: Array<string> = [];
    let line: Array<string> = [];
    const {byteLength} = buffer;
    const view = new DataView(buffer);
    for (let byteOffset = 0; byteOffset < byteLength; byteOffset++) {
        const length = line.push(view.getUint8(byteOffset).toString(2).padStart(8, '0'));
        if (length === bytesPerLine) {
            lines.push(line.join(delimiter));
            line = [];
        }
    }
    if (0 < line.length) {
        lines.push(line.join(delimiter));
    }
    return lines.join('\n');
};
