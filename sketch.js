var cat,mouse;
var catImage, mouseImage;
var garden,gardenImage;
var mouseImage2;
function preload() {
 cat1Image=loadAnimation("images/cat1.png");
 cat2Image=loadAnimation("images/cat2.png","images/cat3.png");
 
 cat4Image=loadAnimation("images/cat4.png");
 mouseImage=loadAnimation("images/mouse1.png");
 gardenImage=loadImage("images/garden.png"); 
 mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png");
 mouseImage4=loadAnimation("images/mouse4.png");
}
function setup(){
    createCanvas(1000,800);
    cat=createSprite(870,600,20,20);
    cat.addAnimation("sleepingcat",cat1Image);
    cat.scale=0.2;
    mouse=createSprite(200,600,20,20);
    mouse.addAnimation("sleepingmouse",mouseImage);
    mouse.scale=0.15;
cat.debug=true;
mouse.debug=true;
mouse.setCollider("circle",0,0,30);
cat.setCollider("circle",0,0,30);
}

function draw() {

    background(gardenImage);
     if(cat.x-mouse.x<(cat.width+mouse.width)/2){
     cat.velocityX=0;
     
     cat.addAnimation("catLastImage",cat4Image);
     cat.changeAnimation("catLastImage");
     mouse.addAnimation("mouseLastImage",mouseImage4);
     mouse.changeAnimation("mouseLastImage");
     //cat.x=300;
     }
    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW){
 cat.velocityX=-5;
 cat.addAnimation("catRunning",cat2Image);
 cat.changeAnimation("catRunning");
 //cat.scale=0.3;


 mouse.addAnimation("mouseTeasing", mouseImage2);
 mouse.frameDelay = 25;
 mouse.changeAnimation("mouseTeasing");
 }
}
