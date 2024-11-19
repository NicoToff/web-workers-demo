import { registerWorkerComponent } from "./utils/register-worker-component.js";

registerWorkerComponent({
    ctaButtonId: "#fetch-1-example",
    workerFilePath: "/workers/fetch/fetch-1.js",
    workerCallback: (worker) =>
        displayResultAndTerminate("#fetch-1-result", worker),
});

registerWorkerComponent({
    ctaButtonId: "#fetch-2-example",
    workerFilePath: "/workers/fetch/fetch-2.js",
    workerCallback: (worker) => {
        worker.postMessage(document.querySelector("#fetch-2-select").value);
        displayResultAndTerminate("#fetch-2-result", worker);
    },
});

function displayResultAndTerminate(resultId, worker) {
    const fetchResult = document.querySelector(resultId);
    worker.addEventListener("message", (ev) => {
        fetchResult.classList.add("adding-content");
        fetchResult.textContent = JSON.stringify(ev.data, undefined, 4);
        worker.terminate();
    });
}
