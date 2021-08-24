var garden,rabbit;
var gardenImg,rabbitImg;
var apple,appleImg
var leaf,leafImg
var select_sprites = Math.round(random(1,2));

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);

var rand = Math.round(random(1,100))
console.log(rand);
}


function draw() {
  background(0);
 rabbit.x = World.mouseX
console.log(frameCount);
createLeaves();
createApples();


 drawSprites();
}

function createApples(){
  if(frameCount%80===0){
    apple = createSprite(random(50,350),40,10,10);
    apple.addAnimation(appleImg)
    apple.scale = 1
    apple.velocityY = 3
  }
}

function createLeaves(){
  if(frameCount%80===0){
    leaf = createSprite(random(50,350),40,10,10);
    leaf.addAnimation(leafImg);
    leaf.scale = 1;
    leaf.velocityY = 3;
  }
}

if(frameCount%80===0){
  if(select_sprites===1){
    function createApples()
  }
  else{
    function createLeaves()
  }
}