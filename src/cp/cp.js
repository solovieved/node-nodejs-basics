import {spawn} from "child_process";
import path from "path";

const spawnChildProcess = async (args) => {
    const script = `${path.join(path.dirname(new URL(import.meta.url).pathname), 'files')}/script.js`;
    spawn('node', [script, ...args], {
        stdio: ['inherit', 'inherit', 'pipe', 'ipc'],
    });
};

await spawnChildProcess(['arg1', 'arg2']);
