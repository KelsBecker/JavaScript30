//get the canvas element, create the context for the canvas
const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
//set the width and height to match the window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
//set styles for stroke 
ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 100;

let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let direction = true;

const draw = (event) => {
    if (!isDrawing) return; //when isDrawing is false exit the function/don't draw
    [lastX, lastY] = [event.clientX, event.clientY]
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`
    ctx.beginPath();
    //start from
    ctx.moveTo(lastX, lastY);
    //go to
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke(); //noting actually happens until this line
    hue++ //increments and changes color based on hsl
    if(hue > 360) hue = 0;
    if(ctx.lineWidth >= 100 || ctx.lineWidth <= 1) direction = !direction; //based on line width toggle direction from true to false
    direction ? ctx.lineWidth++ : ctx.lineWidth-- //when direction is true increment linewidth otherwise decrease line width
}

canvas.addEventListener('mousemove', draw)
canvas.addEventListener('mousedown', () => isDrawing = true) //only draw when the mouse is clicked
canvas.addEventListener('mouseup', () => isDrawing = false)
canvas.addEventListener('mouseout', () => isDrawing = false)
