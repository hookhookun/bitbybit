import * as fs from 'fs';
import * as path from 'path';
import ava from 'ava';

ava('generate index.ts', async (t) => {
    const names: Array<string> = [];
    for (const name of await fs.promises.readdir(__dirname)) {
        if (!name.endsWith('.test.ts') && name !== 'index.ts') {
            names.push(name.slice(0, name.indexOf('.')));
        }
    }
    const dest = path.join(__dirname, 'index.ts');
    const code = names
    .map((name) => `export * from './${name}';`)
    .join('\n');
    await fs.promises.writeFile(dest, code);
    t.pass();
});
