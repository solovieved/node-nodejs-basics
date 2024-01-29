import path from "path";
import fs from "fs";

function getFolderPath(folderName) {
    return path.join(path.dirname(new URL(import.meta.url).pathname), folderName);
}

const remove = async () => {
    const filesFolderPath = getFolderPath('files');
    const deleteFile = `${filesFolderPath}/fileToRemove.txt`;

    fs.unlink(deleteFile, error => {
        if (error) {
            throw new Error('FS operation failed');
        }
    });
};

await remove();
