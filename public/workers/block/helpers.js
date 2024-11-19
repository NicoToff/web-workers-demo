export function blockMainThread(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Simulate heavy computation
    }
}

export async function stutter(duration = 2000) {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {
        blockMainThread(getRandomTime() + 20);
        await wait(getRandomTime());
    }
}

function getRandomTime() {
    return Math.floor(Math.random() * 90) + 10;
}

async function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
