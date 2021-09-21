var jack;

var road;

var power;

var bomb;

var coin;

var energy;
function preload(){
  //pre-load images
  jackImg=loadAnimation("Runner-1.png","Runner-2.png")

  roadImg=loadImage("path.png")

  powerImg=loadImage("power.png")

 bombImg=loadImage("bomb.png")

 coinImg=loadImage("coin.png")

 energyImg=loadImage("energyDrink.png")
}

function setup(){
  createCanvas(1400,800);
  //create sprites here
  
  road=createSprite(200,200,1400,1800);
  road.addImage("moving",roadImg);
  road.velocityY=4;
  road.scale=1.4;

  jack=createSprite(200,580,400,400);
  jack.addAnimation("running",jackImg);
  jack.scale=0.1

  power=createSprite(75,200,5,5)
  power.addImage("rotating",powerImg)
  power.scale=0.2

  bomb=createSprite(75,100,5,5);
  bomb.addImage("rotating",bombImg);
  bomb.scale=0.2


  coin=createSprite(330,200,5,5);
  coin.addImage("rotating",coinImg);
  coin.scale=0.3

  energy=createSprite(200,200,5,5);
  energy.addImage("rotating",energyImg);
  energy.scale=0.3
  
  wall1=createSprite(400,1,20,1700)
  wall1.visible= false
  wall2=createSprite(10,1,20,1700)
  wall2.visible= false
}


function draw() {
  //code to reset the background
  if(road.y > 400){
    road.y=height/2;
  }
  if (keyDown("UP_ARROW")) {
   jack.velocityY=-2;
   }
  if (keyDown("DOWN_ARROW")) {
  jack.velocityY=+2;
  }
  if (keyDown("LEFT_ARROW")) {
  jack.velocityX=-2;
  }
  if (keyDown("RIGHT_ARROW")) {
  jack.velocityX=+2;
  }
  if (jack.collide (coin)) {
    coin.x=1500
    }
  if (jack.collide (power)) {
      power.x=1600
      }
  if (jack.collide (energy) ){
    energy.x=1700
     }
     if (jack.collide (bomb) ){
      bomb.x=1800
       }
    
     if (jack.collide(bomb)|| jack.collide(wall1) || jack.collide(wall2)){ 
      textSize(100);
      stroke("red");
      text("You DIED", 10,200);
      jack.x=200
      jack.y=580
      jack.velocityX=0
      jack.velocityY=0
      
    
        }
    
  background(0);
drawSprites()
}
