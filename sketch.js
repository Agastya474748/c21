var fixedRect, movingRect,ball1,ball2;

function setup() {
  createCanvas(1200,800);
  ball1 = createSprite(200, 200, 50, 80);
  ball1.shapeColor = "blue";
  ball1.debug = true;
  ball2 = createSprite(100, 100, 50, 80);
  ball2.shapeColor = "blue";
  ball2.debug = true;
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 300,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

 // movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0);  
  //movingRect.x= mouseX
  //movingRect.y= mouseY
  ball1.x=mouseX
  ball1.y=mouseY
  if(is_touching(movingRect,fixedRect))
{
  movingRect.shapeColor= "red"
  fixedRect.shapeColor = 'red'
} 
else{
  movingRect.shapeColor= "green"
  fixedRect.shapeColor = 'green'  
}
if(is_touching(ball1,ball2))
{
  ball1.shapeColor= "yellow"
  ball2.shapeColor = 'yellow'
} 
else{
  ball1.shapeColor= "blue"
  ball2.shapeColor = 'blue'  
}
drawSprites();
}
function is_touching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
   return true
}
  else {
  return  false
}
}