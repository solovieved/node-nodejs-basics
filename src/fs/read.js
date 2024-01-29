import path from "path";
import fs from "fs";

const read = async () => {
    const readFile = path.join(path.dirname(new URL(import.meta.url).pathname), 'files') + '/fileToRead.txt';

    fs.readFile(readFile, 'utf8', (error, data) => {
        if (error) {
            throw new Error('FS operation failed');
        }

        console.log(data);
    });
};

await read();
