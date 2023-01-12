const magic = document.querySelector(".magic");
const boxes = document.querySelector(".boxes");

magic.addEventListener("click", () => boxes.classList.toggle("big"));

function createBox() {
  for (let x = 0; x < 4; x++) {
    for (let y = 0; y < 4; y++) {
      const element = document.createElement("div");
      element.classList.add("box");
      element.style.backgroundPosition = `${-y * 125}px ${-x * 125}px`;
      boxes.appendChild(element);
    }
  }
}
createBox();
