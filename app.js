const canvas = document.getElementById('jsCanvas');
const  ctx = canvas.getContext('2d');

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;


function stopPainting() {
  painting = false;
}

function startPainting() {
  painting = true;
}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x,y);
  if(!painting) {
    ctx.beginPath();
    ctx.moveTo(x,y);  //인자로 받는 값
  } else {
    ctx.lineTo(x,y); //현재 sub-path의 마지막 점을 특정 좌표와 !직선!으로 연결한다.
    ctx.stroke();
  }
}

function onMouseDown(event) {
  painting = true;
}

if(canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}