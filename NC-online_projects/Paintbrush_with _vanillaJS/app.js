const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');
let painting = false;
let filling = false;
const mode = document.getElementById('jsMode');
const range = document.getElementById('jsRange');
const saveBtn = document.getElementById("jsSave");

//size of pixel modifier i.e canvas
canvas.width = 700;
canvas.height = 700;

ctx.fillStyle = 'white';
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = 'blue';
ctx.fillStyle = 'blue';
ctx.lineWidth = 2.5;

function stopPainting(event) {
  painting = false;
}

function startPainting(event) {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;

  if (!painting) {
    console.log('create path ', x, y);
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    console.log('create line ', x, y);
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}

function onMouseUp(event) {
  stopPainting();
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
  ctx.fillStyle = color;
}

function handleRangeChnage(event) {
  console.log(event);
  ctx.lineWidth = event.target.value;
}

function handleModeClick(event) {
  if (filling === true) {
    filling = false;
    mode.innerText = 'Fill';
  } else {
    filling = true;
    mode.innerText = 'paint';
  }
}

function handleCanvasClick(event) {
  if (filling) {
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleContextMenu(event) {
  console.log(event);
  event.preventDefault();
}

function handleSaveClick(event){
  const image = canvas.toDataURL("image/png");
  console.log(image);
  const link  = document.createElement("a");
  link.href = image;
  link.download = "paintJS[export]";
  link.click();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);

  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', stopPainting);
  canvas.addEventListener('click', handleCanvasClick);

  canvas.addEventListener('contextmenu', handleContextMenu);
}

console.log(Array.from(colors));
Array.from(colors).forEach((color) =>
  color.addEventListener('click', handleColorClick)
);

if (range) {
  range.addEventListener('input', handleRangeChnage);
}

if (mode) {
  mode.addEventListener('click', handleModeClick);
}

if(saveBtn){
  saveBtn.addEventListener("click",handleSaveClick);
}
