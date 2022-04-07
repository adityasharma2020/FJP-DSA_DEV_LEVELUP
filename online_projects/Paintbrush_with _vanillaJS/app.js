const canvas = document.getElementById('jsCanvas');
const ctx = canvas.getContext('2d');
let painting = false;

//size of pixel modifier i.e canvas 
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = '#000000';
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

  if(!painting){
    ctx.beginPath();
    ctx.moveTo(x,y);
  }else{
    ctx.lineTo(x,y);
    ctx.stroke();
  }
}




function onMouseUp(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener('mousemove', onMouseMove);

  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', onMouseUp);
  canvas.addEventListener('mouseleave', stopPainting);
}
