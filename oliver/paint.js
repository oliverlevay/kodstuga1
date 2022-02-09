const width = 24;
const height = 24;
let selectedColor = "black";
let previousColor = "black";

let mouseIsDown = false;

window.onload = () => {
  document.body.onmousedown = () => {
    mouseIsDown = true;
  };
  document.body.onmouseup = () => {
    mouseIsDown = false;
  };

  const button = document.getElementById("knapp");
  button.onclick = () => {
    window.alert("Börja rita förfan!");
  };

  const colors = document.getElementById("colors");
  colors.childNodes.forEach((colorEl) => {
    colorEl.onclick = () => {
      selectedColor = colorEl.style.backgroundColor;
    };
  });

  const canvas = document.getElementById("canvas");
  for (let index = 0; index < height; index++) {
    const row = document.createElement("div");
    row.className = "row";
    canvas.appendChild(row);
    for (let index = 0; index < width; index++) {
      const cell = document.createElement("div");
      cell.className = "cell";
      cell.onclick = () => {
        cell.style.backgroundColor = selectedColor;
        previousColor = selectedColor;
      };
      cell.onpointermove = (event) => {
        event.preventDefault();
        if (mouseIsDown) {
          cell.style.backgroundColor = selectedColor;
          previousColor = selectedColor;
        }
      };
      cell.onmouseenter = () => {
        previousColor = cell.style.backgroundColor;
        cell.style.backgroundColor = selectedColor;
      };
      cell.onmouseleave = () => {
        cell.style.backgroundColor = previousColor;
      };
      row.appendChild(cell);
    }
  }
};
