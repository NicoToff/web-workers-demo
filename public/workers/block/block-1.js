import { blockMainThread } from "./helpers.js";

const TIME = 2000;
postMessage(`Blocking thread for ${TIME} ms...`);
blockMainThread(TIME);
postMessage("Finished blocking!");
