import fs from "fs";
import path from "path";

const read = async () => {
    const file = `${path.join(path.dirname(new URL(import.meta.url).pathname), 'files')}/fileToRead.txt`;
    const readStream = fs.createReadStream(file, {encoding: 'utf-8'});

    readStream.on('data', (chunk) => {
        process.stdout.write(chunk);
    });
};

await read();
