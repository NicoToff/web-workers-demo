// const fetchButton = document.querySelector("#fetch-1-example");
// const fetchResult = document.querySelector("#fetch-1-result");

// fetchButton.addEventListener("click", () => {
//     fetchResult.classList.add("adding-content");
//     const worker = new Worker("/workers/fetch/fetch_1.js");
//     worker.onmessage = (ev) => {
//         fetchResult.textContent = JSON.stringify(ev.data, undefined, 4);
//     };
// });

registerWorkerComponent({
    fetchButtonId: "#fetch-1-example",
    fetchResultElementId: "#fetch-1-result",
    workerFilePath: "/workers/fetch/fetch-1.js",
});

registerWorkerComponent({
    fetchButtonId: "#fetch-2-example",
    fetchResultElementId: "#fetch-2-result",
    workerFilePath: "/workers/fetch/fetch-2.js",
    workerCallback: (worker) => {
        worker.postMessage(document.querySelector("#fetch-2-select").value);
    },
});

function registerWorkerComponent({
    fetchButtonId,
    fetchResultElementId,
    workerFilePath,
    workerCallback,
}) {
    const fetchButton = document.querySelector(fetchButtonId);
    const fetchResult = document.querySelector(fetchResultElementId);

    fetchButton.addEventListener("click", () => {
        const worker = new Worker(workerFilePath, { type: "module" });
        workerCallback?.(worker);
        worker.addEventListener("message", (ev) => {
            fetchResult.classList.add("adding-content");
            fetchResult.textContent = JSON.stringify(ev.data, undefined, 4);
        });
    });
}
