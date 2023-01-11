// Select color input
// Select size input
let color = document.getElementById("colorPicker");
let canvas = document.getElementById("pixelCanvas");
let gridHeight = document.getElementById("inputHeight");
let gridWidth = document.getElementById("inputWidth");

let draw = false;
let isColoring = false;
// When size is submitted by the user, call makeGrid()
const form = document.getElementById("sizePicker");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = gridHeight.value;
  let width = gridWidth.value;

  draw = true;

  /**
   * @desc creates a grid of squares
   * @param {integer} width - number of squares representing the width of the grid
   * @param {integer} height - number of squares representing the height of the grid
   */

  makeGrid(height, width);
});

function makeGrid(x, y) {
  // Your code goes here!
  let table = document.getElementById('pixelCanvas');;
  let tr = document.getElementsByTagName("tr");
  
  // clears old grid
  if (tr.length > 0) {
    table.innerHTML = "";
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
