import { registerWorkerComponent } from "./utils/register-worker-component";

registerWorkerComponent({
    ctaButtonId: "#fetch-1-example",
    workerFilePath: "/workers/fetch/fetch-1.js",
    workerCallback: (worker) => {
        const fetchResult = document.querySelector("#fetch-1-result");
        worker.addEventListener("message", (ev) => {
            fetchResult.classList.add("adding-content");
            fetchResult.textContent = JSON.stringify(ev.data, undefined, 4);
        });
    },
});

registerWorkerComponent({
    ctaButtonId: "#fetch-2-example",
    workerFilePath: "/workers/fetch/fetch-2.js",
    workerCallback: (worker) => {
        worker.postMessage(document.querySelector("#fetch-2-select").value);
        const fetchResult = document.querySelector("#fetch-2-result");
        worker.addEventListener("message", (ev) => {
            fetchResult.classList.add("adding-content");
            fetchResult.textContent = JSON.stringify(ev.data, undefined, 4);
        });
    },
});
