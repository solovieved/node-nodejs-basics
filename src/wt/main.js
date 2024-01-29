import {Worker} from "worker_threads";
import os from "os";
import path from "path";

const performCalculations = async () => {
    const numCores = os.cpus().length;
    const workerPromises = [];

    for (let i = 0; i < numCores; i++) {
        const worker = new Worker(
            `${path.join(path.dirname(new URL(import.meta.url).pathname), 'worker.js')}`,
            {workerData: i + 10}
        );

        const workerPromise = new Promise((resolve) => {
            worker.on('message', (message) => {
                resolve(message);
            });
        });

        workerPromises.push(workerPromise);
    }

    Promise.all(workerPromises)
        .then((results) => {
            console.log(results);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
};

await performCalculations();
