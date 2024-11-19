const spinner = document.querySelector("#spinner");
const svgs = spinner.querySelectorAll("svg");
const colors = ["#a855f7", "#3b82f6", "#84cc16", "#eab308", "#f43f5e"];
svgs.forEach((svg, index) => {
    let degree = 0;
    svg.style.color = colors[index];
    setInterval(() => {
        svg.style.transform = `rotate(${degree}deg)`;
        degree = (degree + 1) % 360;
    }, 6 + index * 3);
});
