var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg 
var leaf,leafImg


function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");  
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png")
 }
function setup(){ 
  createCanvas(400,400);

  garden = createSprite(200,200);
  garden.addImage(gardenImg);

  rabbit = createSprite(180,340,30,30);
  rabbit.scale =0.09;
  rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  
  rabbit.x = World.mouseX
  

  createLeaves();
  createApples();

  var select_apples = Math.round(random,(1,2));
  var select_leaves = Math.round(random,(1,2));

  if (World.frameCount % 80 == 0) {
    if (select_apples == 1){
       createApples()
    }
  }    

  if(World.frameCount % 80 == 0){
    if(select_leaves == 1){
       createLeaves()
    }
  }
  
  drawSprites()
}

function createLeaves(){
  var leaf = createSprite(200,Math.round(random(50, 350)),40, 10, 10);
  leaf.addImage(leafImg);
  leaf.velocityY = 3
  leaf.scale = 0.05
}

function createApples(){
  var apple = createSprite(200,Math.round(random(50, 350)),40, 10, 10);
  apple.addImage(appleImg);
  apple.velocityY = 3
  apple.scale = 0.05
}

