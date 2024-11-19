import { stutter } from "./helpers.js";

postMessage("Starting stutter...");
await stutter(2000);
postMessage("Stutter ended!");
