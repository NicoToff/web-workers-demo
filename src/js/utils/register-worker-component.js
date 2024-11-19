export function registerWorkerComponent({
    ctaButtonId,
    workerFilePath,
    workerCallback,
}) {
    const fetchButton = document.querySelector(ctaButtonId);
    fetchButton.addEventListener("click", () => {
        const worker = new Worker(workerFilePath, { type: "module" });
        workerCallback?.(worker);
    });
}
