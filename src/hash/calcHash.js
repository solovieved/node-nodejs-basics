import fs from "fs";
import crypto from "crypto";
import path from "path";
const calculateHash = async () => {
    const file = `${path.join(path.dirname(new URL(import.meta.url).pathname), 'files')}/fileToCalculateHashFor.txt`;
    const readStream = fs.createReadStream(file);
    const hash = crypto.createHash('sha256');

    readStream.on('data', (chunk) => {
        hash.update(chunk);
    });

    readStream.on('end', () => {
        const fileHash = hash.digest('hex');
        console.log(fileHash);
    });
};

await calculateHash();
