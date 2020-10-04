var bullet;
var wall,thickness;
var speed, weight;
function setup() {
  createCanvas(1600,400);

  thickness = random(22,83);
  weight = random(30,52);
  speed = random(223, 321);
   bullet = createSprite(50,200,50,50);
   bullet.velocityX=speed;
   bullet.shapeColor=color(255,255,255);
   wall = createSprite(1500,200,60,height/2);
   wall.shapeColor = color(80,80,80);
}

function draw() {
  background(0,0,0);  

  if(isTouching(bullet,wall)){

    bullet.x = wall.x - (wall.width/2 + bullet.width/2);
    var damage= (0.5 * weight * speed * speed) / (thickness * thickness * thickness);

   if(damage < 10){
     wall.shapeColor=color(0,255,0);
   }
   if(damage>10){
     wall.shapeColor=color(255,0,0);
   }
  }
 
  drawSprites();
}
function isTouching(object1,object2){
if(object1.x-object2.x > object2.width/1 + object1.width/2){
return true
}
else {
  return false;
}
} 