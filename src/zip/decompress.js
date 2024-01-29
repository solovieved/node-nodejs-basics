import path from "path";
import {createReadStream, createWriteStream} from "fs";
import {createGunzip} from "zlib";

const decompress = async () => {
    const file = `${path.join(path.dirname(new URL(import.meta.url).pathname), 'files')}/fileToCompress.txt`;
    const archive = `${path.join(path.dirname(new URL(import.meta.url).pathname), 'files')}/archive.gz`;
    const readStream = createReadStream(archive);
    const writeStream = createWriteStream(file);
    const gunzip = createGunzip();
    readStream.pipe(gunzip).pipe(writeStream);
};

await decompress();
