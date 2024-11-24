const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth*0.8;
canvas.height = window.innerHeight*0.6;

//We now need to handle the mouse event

let drawing = false;

canvas.addEventListener('mousedown', ()=>{
    drawing = true;
    ctx.beginPath();
})

canvas.addEventListener('mouseup', ()=>{
   drawing = false;
   ctx.closePath();
})

canvas.addEventListener('mousemove', (e)=>{
    if(!drawing) return ;

    const rect = canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.strokeStyle = "black"
    ctx.lineTo(x,y);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(x,y)
})