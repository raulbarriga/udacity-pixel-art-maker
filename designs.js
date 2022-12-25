// Select color input
// Select size input
let color = document.getElementById("colorPicker");
let canvas = document.getElementById("pixelCanvas");

let draw = false;
let isColoring = false;
// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let gridHeight = document.getElementById("inputHeight").value;
  let gridWidth = document.getElementById("inputWidth").value;
  
  draw = true;

  makeGrid(gridHeight, gridWidth);
});

function makeGrid(x, y) {
  // Your code goes here!
  let tr = document.getElementsByTagName("tr");
  if (tr.length > 0) {
    tr[0].remove();
  }

  let row;
  let cell;
  for (let i = 0; i < x; i++) {
    row = canvas.insertRow(i);

    for (let j = 0; j < y; j++) {
      cell = row.insertCell(j);
    }
  }

  // drag or click to color
  canvas.addEventListener("mousedown", (e) => {
    if (draw && e.button === 0) {
      if (e.target.style.backgroundColor) {
        e.target.removeAttribute("style");
      } else {
        e.target.style.backgroundColor = color.value;
        isColoring = true;
      }
    }
  });
  canvas.addEventListener("mousemove", (e) => {
    if (isColoring) {
      e.target.style.backgroundColor = color.value;
    }
  });
}

document.addEventListener("mouseup", () => {
  isColoring = false;
});