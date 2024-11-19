import { blockMainThread } from "./utils/block-main-thread.js";
import { stutter } from "./utils/stutter.js";
import { registerWorkerComponent } from "./utils/register-worker-component.js";

const blockButton = document.querySelector("#block-1-example");
const stutterButton = document.querySelector("#block-2-example");
const result = document.querySelector("#block-result");

blockButton.addEventListener("click", () => blockMainThread(1000));
stutterButton.addEventListener("click", () => stutter());

const workerCallback = (worker) => {
    worker.onmessage = (ev) => {
        const message = `[Worker] ${ev.data}`;

        if (message.includes("...")) {
            result.classList.remove("adding-content");
            result.textContent = message;
        } else {
            result.classList.add("adding-content");
            result.textContent = `${result.textContent}\n${message}`;
            worker.terminate();
        }
    };
};

registerWorkerComponent({
    ctaButtonId: "#block-3-example",
    workerFilePath: "/workers/block/block-1.js",
    workerCallback,
});

registerWorkerComponent({
    ctaButtonId: "#block-4-example",
    workerFilePath: "/workers/block/block-2.js",
    workerCallback,
});
