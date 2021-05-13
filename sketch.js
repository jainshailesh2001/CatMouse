var cat , catImg1 , catImg2 ;
var mouse, mouseImg1 , mouseImg2;
var bgImg
function preload() {
    //load the images here
    catImg1=loadAnimation("images/cat1.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    catImg2=loadAnimation("images/cat2.png", "images/cat3.png");
    mouseImg2=loadAnimation("images/mouse2.png", "images/mouse3.png");
    catImg3=loadAnimation("images/cat4.png");
    mouseImg3=loadAnimation("images/mouse4.png");
    bgImg=loadImage("images/garden.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(900, 600, );
    cat.addAnimation(catImg1);
    cat.scale=0.13;

    mouse = createSprite(250, 600,);
    mouse.addAnimation(mouseImg1);
    mouse.scale=0.15;
}
function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2){
        cat.velocityX=0;
        cat.addAnimaton(catImg3);
        tom.x = 300;
        tom.scale=0.15;
        cat.changeAnimation(catImg3);
        mouse.addAnimation(mouseImg4);
        mouse.scale = 0.15;
        mouse.changeAnimation(mouseImg4);
        
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode === LEFT_ARROW){
      mouse.addAnimation("mouseTeasing", mouseImg2);
      mouse.frameDelay = 25;
      mouse.changeAnimation("mouseTeasing");
  }
  if(keyCode === RIGHT_ARROW){
    mouse.addAnimation("mouseTeasing", mouseImg2);
    mouse.frameDelay = 25;
    mouse.changeAnimation("mouseTeasing");
  }


}
