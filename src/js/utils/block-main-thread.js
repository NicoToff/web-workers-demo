export function blockMainThread(ms) {
    const start = Date.now();
    while (Date.now() - start < ms) {
        // Simulate heavy computation
    }
}
