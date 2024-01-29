import path from "path";
import fs from "fs";

const write = async () => {
    const file = `${path.join(path.dirname(new URL(import.meta.url).pathname), 'files')}/fileToWrite.txt`;
    const writableStream = fs.createWriteStream(file);

    process.stdin.on('data', (chunk) => {
        writableStream.write(chunk);
    });
};

await write();
