//setting up canvas and ctx
let canvas = document.getElementById("canvas-home");
let ctx = canvas.getContext('2d');
let keyPad = document.getElementById("form-home");
let display = document.getElementById("view");
let keys = [document.getElementById("num1"), document.getElementById("num2"), document.getElementById("num3"), document.getElementById("num4"), document.getElementById("num5"),document.getElementById("num6"),
  document.getElementById("num7"), document.getElementById("num8"), document.getElementById("num9"), document.getElementById("num0")];
let check = document.getElementById("submit");
let password = "1 2 3 4"
let input = []

let updateDisplay = () => {
  display.value = input.join(" ");
}

check.addEventListener("mousedown", function(){
   check.style.backgroundColor = "red";
if(input.join(" ") === password){
  accepted();
};
});

check.addEventListener("mouseup", function(){
   check.style.backgroundColor = "green";
if(input.join(" ") != password){
  input.length = 0;
  display.value = "";
  display.placeholder = "Wrong Password";
}
})


keys[0].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("1 was pressed");
  input.push("1");
  console.log(input.join(" "));
  update();
  }
})
keys[1].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("2 was pressed");
  input.push("2");
  console.log(input.join(" "));
  update();
  }
})
keys[2].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("3 was pressed");
  input.push("3");
  console.log(input.join(" "));
  update();
  }
})
keys[3].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("4 was pressed");
  input.push("4");
  console.log(input.join(" "));
  update();
  }
})
keys[4].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("5 was pressed");
  input.push("5");
  console.log(input.join(" "));
  update();
  }
})
keys[5].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("6 was pressed");
  input.push("6");
  console.log(input.join(" "));
  update();
  }
})
keys[6].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("7 was pressed");
  input.push("7");
  console.log(input.join(" "));
  update();
  }
})
keys[7].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("8 was pressed");
  input.push("8");
  console.log(input.join(" "));
  update();
  }
})
keys[8].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("9 was pressed");
  input.push("9");
  console.log(input.join(" "));
  update();
  }
})
keys[9].addEventListener("click", function(){
  if(input.length <= 3){
  console.log("0 was pressed");
  input.push("0");
  console.log(input.join(" "));
  update();
  }
})


canvas.style.cursor = 'default';
//Game Variables
let x = 70;
let y = 400;
let windowX = 600;
let windowY = 200;
let windowWidth = 300;
let windowHeight = 200;
let floorX = 0;
let floorY = 550
let drawerX = 450;
let drawerY = 400;
let interactBoxX = 0;
let interactBoxY = 200;
let interactBoxWidth = 120;
let interactBoxHeight = 350;
let width = 50;
let height = 150;
let speed = 10;
let isJumping = false;
let facingRight = true;
let isLocked = true;
let interacted = false;

console.log(x + width);

//Draw & Update functions
const drawRectangle = () => {
  ctx.globalAlpha = 0.20;
  ctx.fillStyle = 'black';
  ctx.fillRect(x + 15, y , width + 10, height + 50);
  ctx.globalAlpha = 1;
  ctx.fillStyle = 'orange';
  ctx.fillRect(x, y, width, height);
};

//draw door interact box
const drawDoorInteractBox = () => {
  ctx.globalAlpha = 0;
  ctx.fillStyle = 'orange';
  ctx.fillRect(interactBoxX - x, interactBoxY, interactBoxWidth, interactBoxHeight);
}

//player head
const drawHead = () => {
    ctx.globalAlpha = 0.20;
    ctx.fillStyle = 'black';
    ctx.fillRect(x + 40, y - 50, 25, 50);
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'peachpuff';
    ctx.fillRect(x + 10, y - 50, 30, 50);
    ctx.fillStyle = 'black';
    if(facingRight){
        ctx.fillRect(x + 30, y - 40, 10, 10);
    } else {
        ctx.fillRect(x + 10, y - 40, 10, 10);
    }
    ctx.fillStyle = 'brown';
    ctx.fillRect(x + 10, y - 60, 30, 15);
};

const drawWindow = () => {
    ctx.fillStyle = 'white';
    ctx.fillRect(windowX - x - 20, windowY - 20, windowWidth + 40, windowHeight + 40);
    ctx.fillStyle = '#040348';
    ctx.fillRect(windowX - x, windowY, windowWidth, windowHeight);
    ctx.fillStyle = 'white';
    ctx.fillRect(windowX - x + (windowWidth / 2), windowY, 15, windowHeight);
    ctx.fillRect(windowX - x, windowY + (windowHeight / 2), windowWidth, 15);
    
  };


const drawDrawer = () => {
  //shadow
    ctx.globalAlpha = 0.1;
    ctx.fillStyle = 'black';
    ctx.fillRect(drawerX - x, drawerY, 120, 165);
    //outline
    ctx.globalAlpha = 1;
    ctx.fillStyle = 'black';
    ctx.fillRect(drawerX - x - 5, drawerY - 5, 110, 160);
    //drawer
    ctx.fillStyle = 'brown';
    ctx.fillRect(drawerX - x, drawerY, 100, 150);
}

const drawDoor = () => {
  //outline
    ctx.fillStyle = 'black';
    ctx.fillRect(0 - x - 5, 200 - 5, 110, 360);
    //door
    ctx.fillStyle = 'brown';
    ctx.fillRect(0 - x, 200, 100, 350);
    //door handle
    ctx.fillStyle = 'yellow';
    ctx.fillRect(80 - x, 400, 10, 20);
}
  
 const clearCanvas = () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
};

  const drawFloor = () => {
    ctx.fillStyle = 'brown';
    ctx.fillRect(0, 550, canvas.width, 50);
  };

  const drawControls = () => {
    ctx.font = '20px Arial';
    ctx.fillStyle = 'black';
    ctx.fillText('Use the arrow keys to move the character', 10, 50);
    ctx.fillText('Press the up arrow to jump', 10, 80);
    ctx.fillText('Press E to interact', 10, 110);
  }


  const checkFloorCollsion = () =>{
    if (y === floorY - 40){
      y -= speed;
    }
  };

  const denied = () => {
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.fillText('The door is locked...', x, y - 70);
    
  }

  const accepted = () => { 
    location.href = '/scene3/theHouse/theRoom/room.html';
  }

  const destroyInteract = () =>{
    if(x > interactBoxWidth -60){
      interacted = false;
      keyPad.style.display = "none"
      input.length = 0
    }
  }
  
document.addEventListener('keydown', function(event){
    if(event.key === 'e'){
      if(x >= 0 && x <= interactBoxWidth - 60){
        display.placeholder = "****"
        if(isLocked){
          console.log('interacted');
          interacted = true;
        } else {
          accepted();
        }
      } 
    }
});


const update = () =>{
    clearCanvas();
    drawWindow();
    drawFloor();
    drawDoor();
    drawDoorInteractBox();
    drawDrawer();
    drawControls();
    checkFloorCollsion();
    drawRectangle();
    drawHead();
    destroyInteract();
    if(interacted === true){
      denied();
      keyPad.style.display = 'block'
    }
    updateDisplay();
  };


  //movement functions
  let moveRight = () => {
    if (x + width + speed <= canvas.width) {
      facingRight = true;
      x += speed;
    }
  }
  
  const moveLeft = () => {
    if (x - speed >= 0) {
      facingRight = false;
      x -= speed;
    }
  }
  
  const jump = (jumpDuration) => {

    let jumpTime = jumpDuration;
    console.log(isJumping)

  if(isJumping === false){
    let jumpIntr = setInterval(function(){
      isJumping = true;
      console.log(isJumping);
      if(jumpTime <= 5){
        y += 12;
      } else if(jumpTime > 5){
        y -= 15;
      };
     if(-- jumpTime < 0){
      console.log("jump is over");
      y = 400;
      isJumping = false
      console.log(isJumping)
      clearInterval(jumpIntr);

     }
     update();
  }, 30)
  }
  }
  
  /*
  const moveDown = () => {
    if (y + height + speed <= canvas.height) {
      y += speed;
    }
  }
*/  

  //Make character jump
  document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowUp' && isJumping === false){
      jump(10);
    }
    update();
});
  //Move character Right
  document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowRight'){
      console.log(x + width);
      moveRight();
    }
    update();
  });
  //Move character Left
  document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowLeft'){
      console.log(x + width)
      moveLeft();
    }
    update();
  });
  //Move character Down
  document.addEventListener('keydown', function(event){
    if(event.key === 'ArrowDown'){
      moveDown();
    }
    update();
  });


setInterval(update(), 1)  