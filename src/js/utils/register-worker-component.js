export function registerWorkerComponent({
    ctaButtonId,
    workerFilePath,
    workerCallback,
}) {
    const fetchButton = document.querySelector(ctaButtonId);
    const worker = new Worker(workerFilePath, { type: "module" });
    fetchButton.addEventListener("click", () => {
        workerCallback?.(worker);
    });
}
