import { wait } from "./wait.js";
import { blockMainThread } from "./block-main-thread.js";

export async function stutter(duration = 2000) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        blockMainThread(getRandomTime() + 20);
        await wait(getRandomTime());
    }
}

/** Random duration between 10 and 100 ms */
function getRandomTime() {
    return Math.floor(Math.random() * 90) + 10;
}
