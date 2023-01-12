const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
const gird = document.querySelector(".grid");

for (let index = 0; index < 500; index++) {
  const element = document.createElement("div");
  element.classList.add("box");
  element.addEventListener("mouseover", () => setColor(element));
  element.addEventListener("mouseout", () => removeColor(element));
  gird.appendChild(element);
}
function setColor(element) {
  const color = getRandomColor();
  element.style.background = color;
  element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}
function removeColor(element) {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = `0 0 2px rgb(0,0,0)`;
}
function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}
