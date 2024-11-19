import { getTimeData } from "./helpers.js";

(async () => {
    postMessage(await getTimeData());
})();
