import path from "path";
import fs from "fs";

function getFolderPath(folderName) {
    return path.join(path.dirname(new URL(import.meta.url).pathname), folderName);
}

const rename = async () => {
    const filesFolderPath = getFolderPath('files');
    const wrongFile = `${filesFolderPath}/wrongFilename.txt`;
    const properFile = `${filesFolderPath}/properFilename.md`;

    if (!fs.existsSync(wrongFile) || fs.existsSync(properFile)) {
        throw new Error('FS operation failed');
    }

    fs.renameSync(wrongFile, properFile)
};

await rename();
