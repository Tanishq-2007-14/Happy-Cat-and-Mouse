var catImg1,mouseImg1,bgImg,catImg2,mouseImg2,mouseImg3,catImg3;
function preload() {
    //load the images here
    bgImg = loadImage("images/garden.png");
    catImg1 = loadAnimation("images/cat1.png");
    catImg2 =  loadAnimation("images/cat2.png","images/cat3.png");
    catImg3 = loadAnimation("images/cat4.png");

    mouseImg1 =  loadAnimation("images/mouse1.png");
    mouseImg2 =  loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3 =  loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(700,600);
    cat.addAnimation("cat_sitting",catImg1);
    cat.scale = 0.1;
    mouse = createSprite(200,650);
    mouse.addAnimation("mouse_teasing",mouseImg1);
    mouse.scale = 0.1;

}

function draw() {
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(mouse.collide(cat)){
        cat.velocityX = 0;
        mouse.velocityX = 0;
        mouse.addAnimation("mouse_teasing",mouseImg3)
        mouse.changeAnimation(mouseImg3);
        cat.addAnimation("cat_sitting",catImg3)
        cat.changeAnimation(catImg3); 
    }
    drawSprites();
}


function keyPressed(){
//For moving and changing animation write code here
    if(keyCode === LEFT_ARROW){
        mouse.addAnimation("mouse_teasing",mouseImg2)
        mouse.changeAnimation(mouseImg2);
    
        cat.velocityX = -5;
        cat.addAnimation("cat_sitting",catImg2)
        cat.changeAnimation(catImg2);
        
    }

}
