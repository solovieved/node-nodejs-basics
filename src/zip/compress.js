import path from "path";
import {createReadStream, createWriteStream} from 'fs';
import {createGzip} from 'zlib';

const compress = async () => {
    const file = `${path.join(path.dirname(new URL(import.meta.url).pathname), 'files')}/fileToCompress.txt`;
    const archive = `${path.join(path.dirname(new URL(import.meta.url).pathname), 'files')}/archive.gz`;
    const readStream = createReadStream(file);
    const writeStream = createWriteStream(archive);
    const gzip = createGzip();
    readStream.pipe(gzip).pipe(writeStream);
};

await compress();
