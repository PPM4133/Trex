var box;


function setup() {
  createCanvas(400,400);

box = creatSprite(200,200,30,30);

}

function draw() 
{
  background(30);

  
  if(keysIsDown(RIGTH_ARROW))
  {
    box.position.x = box.position.x +5;
  }

  if(keysIsDown(LEFT_ARROW))
  {
    box.position.x = box.position.x -5;
  }

  if(keysIsDown(UP_ARROW))
  {
    box.position.y = box.position.y -5;
  }

  if(keysIsDown(DOWN_ARROW))
  {
    box.position.y = box.position.y +5;
  }

drawSprite();



}




