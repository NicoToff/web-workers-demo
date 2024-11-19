import { getTimeData } from "./helpers.js";

self.onmessage = async (ev) => {
    const tz = ev.data;
    postMessage(await getTimeData(tz));
};
