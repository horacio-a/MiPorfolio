const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
const  base = new Image();

base.src = 'imagenes\ backojo.png'

function resizeCanvas(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.height = canvas.height;
    ctx.width = canvas.width;
}

function  DrawBase(){
 ctx.drawImage(base, 0, 0)
}


function main() {
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)
    DrawBase()
}



window.onload = main
