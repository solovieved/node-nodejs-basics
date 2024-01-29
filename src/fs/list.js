import fs from "fs";
import path from "path";

const list = async () => {
    const filesFolderPath =  path.join(path.dirname(new URL(import.meta.url).pathname), 'files');

    fs.readdir(filesFolderPath, (error, files) => {
        if (error) {
            throw new Error('FS operation failed');
        }

        console.log(files);
    });
};

await list();
