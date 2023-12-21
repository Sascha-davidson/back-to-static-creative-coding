/** @type {HTMLCanvasElement} */
const nav = document.querySelector(".container");
const navHeight = nav.offsetHeight
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight - navHeight;

canvas.style.height = canvas.height + "px";
const canvasBounds = canvas.getBoundingClientRect();


class Root {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 7 + 5;
    this.size = Math.random() * 1 + 2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.size += 0.1;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "#313131";
      ctx.stroke();
      ctx.strokeStyle = "#1E1E1E";
      requestAnimationFrame(this.update.bind(this));
      ctx.closePath();
    }
  }
}

document.addEventListener('mousemove', (e)=>{
  const isOverCanvas = isInBoundingBox(e.pageX, e.pageY, canvasBounds);
  if(isOverCanvas === false) return;
  const root = new Root(e.pageX, e.pageY);
  root.update();
})

function isInBoundingBox(mouseX, mouseY, canvasBounds){
  const isInHorizontal = mouseX >= canvasBounds.x && mouseX <= canvasBounds.width;
  const isInVertical = mouseY >= canvasBounds.y && mouseY <= canvasBounds.height;

  return isInHorizontal && isInVertical;
}