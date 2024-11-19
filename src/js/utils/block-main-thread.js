import { wait } from "./wait";

export function blockMainThread(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        wait(0);
    }
}
