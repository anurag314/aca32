var bg, backgroundImg,platformImage,platformGroup;

function preload() {
  backgroundImg = loadImage("images/bg.jpg");
  ironImage = loadImage("images/iron.png");
  platformImage = loadImage("images/stone.png");
  }

function setup() {
  createCanvas(1000, 600);
  bg = createSprite(580,300);
  bg.addImage(backgroundImg);
  bg.scale =2;
 
  ironMan = createSprite(200, 505, 20, 50);
  ironMan.addImage("running", ironImage);
  ironMan.scale = 0.3;
  ironMan.debug=true;
  ironMan.setCollider("rectangle",100,0,200,400)
  platformGroup = new Group();
}

function draw() {

  
  if (keyDown("up")) {
    ironMan.velocityY = -10;
  }
  if (keyDown("left")) {
    ironMan.x = ironMan.x - 5;
  }
  if (keyDown("right")) {
    ironMan.x = ironMan.x + 5;
  }
  ironMan.velocityY = ironMan.velocityY + 0.5;

  generatePlatforms();
  for (var i = 0; i < platformGroup.length; i++) {
    var temp = platformGroup.get(i);

    if (temp.isTouching(ironMan)) {
      ironMan.collide(temp);
    }
  }
    drawSprites();
   
}
function generatePlatforms() {
  if (frameCount % 60 === 0) {
    var brick = createSprite(1200, 10, 40, 10);
    brick.x = random(50, 850);
    brick.addImage(platformImage);
    brick.velocityY = 5;
    brick.lifetime = 250;
    platformGroup.add(brick);
  }
}
