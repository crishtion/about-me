//setting up canvas and ctx
let canvas = document.getElementById("canvas-home");
let ctx = canvas.getContext('2d');

//Game Variables
let x = 50;
let y = 70;
let buttonX = 600;
let buttonY = 200;
let windowWidth = 150;
let windowHeight = 100;
let width = 50;
let height = 50;
let speed = 10;

//Draw & Update functions
const drawRectangle = () => {
    ctx.fillStyle = 'orange';
    ctx.fillRect(x, y, width, height);
};

const drawWindow = () => {
    ctx.fillStyle = 'lightblue';
    ctx.fillRect(buttonX - x, buttonY - y, windowWidth, windowHeight);
  };
  
 const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

const update = () =>{
    clearCanvas();
    drawWindow();
    drawRectangle();
  }


  //movement functions
  let moveRight = () => {
    if (x + width + speed <= canvas.width) {
      x += speed;
    }
  }
  
  const moveLeft = () => {
    if (x - speed >= 0) {
      x -= speed;
    }
  }
  
  const moveUp = () => {
    if (y - speed >= 0) {
      y -= speed;
    }
  }
  
  const moveDown = () => {
    if (y + height + speed <= canvas.height) {
      y += speed;
    }
  }
  
  document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowRight'){
      moveRight();
    }
    if(event.key === 'ArrowLeft'){
      moveLeft();
    }
    if(event.key === 'ArrowUp'){
      moveUp();
    }
    if(event.key === 'ArrowDown'){
      moveDown();
    }
    update();
});


update();