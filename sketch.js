var car,wall,deformation
var weight,speed
function setup() {
  createCanvas(2000,2000);
  car = createSprite(50,200,50,50);
  wall = createSprite(1400,200,120,120)
  speed=random(55,90)
  weight=random(400,1500)
  deformation = 0
}

function draw() {
  background(255,255,255);  
  car.velocityX=speed
  deformation= 0.5*speed*speed*weight/22500
  if(car.collide(wall)){
    car.velocityX=0
    if(deformation<100){
      car.shapeColor=color(0,255,0)
    }
    if(deformation>180){
      car.shapeColor=color(255,0,0)
    }
    if(180>deformation<100){
      car.shapeColor=color(230,230,0)
    }
  }
  
  drawSprites();
}