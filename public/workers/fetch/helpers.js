// https://timeapi.io/swagger/index.html

export async function getTimeData(timeZone = "Europe/Amsterdam") {
    const tz = encodeURIComponent(timeZone);
    return fetch(`https://timeapi.io/api/timezone/zone?timeZone=${tz}`)
        .then((r) => r.json())
        .catch(console.error);
}

export async function wait(ms) {
    return new Promise((r) => setTimeout(r, ms));
}
