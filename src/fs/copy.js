import path from "path";
import fs from "fs";

function getFolderPath(folderName) {
    return path.join(path.dirname(new URL(import.meta.url).pathname), folderName);
}

const copy = async () => {
    const filesFolderPath = getFolderPath('files');
    const filesCopyFolderPath = getFolderPath('files_copy');

    fs.mkdir(filesCopyFolderPath, error => {
        if (error) {
            throw new Error('FS operation failed');
        }
    });

    fs.readdir(filesFolderPath, (error, files) => {
        if (error) {
            throw new Error('FS operation failed');
        }

        files.forEach(file => {
            const src = `${filesFolderPath}/${file}`;
            const dest = `${filesCopyFolderPath}/${file}`;

            fs.copyFileSync(src, dest);
        })
    });
};

await copy();
