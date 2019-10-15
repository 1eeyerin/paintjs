const canvas = document.getElementById('jsCanvas');
const  ctx = canvas.getContext('2d');
const colors = document.getElementsByClassName('jsColor');

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

let painting = false;


function stopPainting(event) {painting = false}
function startPainting(event) {painting = true}

function onMouseMove(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  console.log(x,y);
  if(!painting) { //페인팅 중이 아닐때
    ctx.beginPath();  //line = path
    ctx.moveTo(x,y);  //인자로 받는 값
  } else {  //페인팅 중 일때
    ctx.lineTo(x,y); //현재 sub-path의 마지막 점을 특정 좌표와 !직선!으로 연결한다.
    ctx.stroke(); //현재 sub-path를 현재의 stroke style로 획을 그음
  }
}

function handleColorClick(event) {
  const color = event.target.style.backgroundColor;
  ctx.strokeStyle = color;
}

if(canvas) {
  canvas.addEventListener('mousemove', onMouseMove);
  canvas.addEventListener('mousedown', startPainting);
  canvas.addEventListener('mouseup', stopPainting);
  canvas.addEventListener('mouseleave', stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener('click', handleColorClick)); //Array.from()객체를 배열로
//array를 만들고 foreach로 color를 돌려서 handleColorClick을 호출