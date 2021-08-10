var bgImg,sleepImg,brushImg,gymImg,eatImg,drinkImg,moveImg,bathImg
var astronaut;
var brushing;

function preload() {
  bgImg = loadImage("Astronaut's daily routine/iss.png");
  sleepImg = loadAnimation("Astronaut's daily routine/sleep.png");
  brushImg = loadAnimation("Astronaut's daily routine/brush.png");
  gymImg = loadAnimation("Astronaut's daily routine/gym1.png","Astronaut's daily routine/gym2.png");
  eatImg = loadAnimation("Astronaut's daily routine/eat1.png","Astronaut's daily routine/eat2.png");
  drinkImg = loadAnimation("Astronaut's daily routine/drink1.png","Astronaut's daily routine/drink2.png");
  moveImg = loadAnimation("Astronaut's daily routine/move.png","Astronaut's daily routine/move1.png");
  bathImg = loadAnimation("Astronaut's daily routine/bath1.png","Astronaut's daily routine/bath2.png");
}

function setup() {
  createCanvas(800,400);
  astronaut = createSprite(300,230);
  astronaut.addAnimation("sleeping",sleepImg);
  astronaut.scale = 0.1;  
}

function draw() {
  background(bgImg);
  text("UP Arrow = Brushing" + brushing,20,20);
  text("Down Arrow = Gymming" + brushing,20,40);
  text("Left Arrow = Bathing" + brushing,20,60);
  text("Right Arrow = Eating" + brushing,20,80);
  text("M Key = Moving" + brushing,20,100);

  if (keyDown("UP_ARROW")) {
    astronaut.addAnimation("brushing",brushImg);
    astronaut.changeAnimation("brushing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("DOWN_ARROW")) {
    astronaut.addAnimation("gymming",gymImg);
    astronaut.changeAnimation("gymming");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("LEFT_ARROW")) {
    astronaut.addAnimation("bathing",bathImg);
    astronaut.changeAnimation("bathing");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("RIGHT_ARROW")) {
    astronaut.addAnimation("eating",eatImg);
    astronaut.changeAnimation("eating");
    astronaut.y = 250;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
  }

  if (keyDown("m")) {
    astronaut.addAnimation("moving",moveImg);
    astronaut.changeAnimation("moving");
    astronaut.y = 250;
    astronaut.velocity = 1;
  }

  drawSprites();

}