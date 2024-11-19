import { getTimeData, wait } from "./helpers.js";

(async () => {
    await wait(2000);
    postMessage(await getTimeData());
})();
