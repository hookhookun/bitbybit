export const toString = (
    buffer: ArrayBuffer,
    bitsPerLine = 32,
    maxLineCount = Infinity,
    delimiter = '',
): string => {
    const lines: Array<string> = [];
    let line: Array<string> = [];
    const {byteLength} = buffer;
    const view = new DataView(buffer);
    for (let byteOffset = 0; byteOffset < byteLength; byteOffset++) {
        for (const bit of view.getUint8(byteOffset).toString(2).padStart(8, '0')) {
            const length = line.push(bit);
            if (length === bitsPerLine) {
                const lineCount = lines.push(line.join(delimiter));
                if (maxLineCount <= lineCount) {
                    return lines.join('\n');
                }
                line = [];
            }
        }
    }
    if (0 < line.length) {
        lines.push(line.join(delimiter));
    }
    return lines.join('\n');
};
