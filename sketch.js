var spacecraft,bg;
var spacecraft1;
var planet1,planet2,asteroid,asteroid1;
var invisibleground;
function preload() {
spacecraft = loadImage("Images/SpaceCraft.png") 
bg = loadImage("Images/bg.jpg")
planetImage1 = loadImage("Images/Planet 1.png")
planetImage2 = loadImage("Images/Planet 2.png")
asteroidImage = loadImage("Images/asteroid.png")
asteroidImage1 = loadImage("Images/asteroid1.png")
coins = loadImage("Images/coins.png")

}
function setup (){
    canvas = createCanvas(700,600)

    space1=createSprite(200,300) 
    space1.scale = 0.3;
    space1.velocityX = 2;
    space1.addImage(spacecraft)

    planet1=createSprite(400,300) 
    planet1.scale = 0.5;
    planet1.addImage(planetImage1)

    planet2=createSprite(100,400) 
    planet2.scale = 0.5;
    planet2.addImage(planetImage2)

   // bg1 = createSprite(700,600,1200,700)


    invisibleground=createSprite(50,600,1400,10)
}


function draw(){
    background(bg)
    background.velocityX = -4;
   // if(bg1.x<700){
   //     bg1.x = bg1.width/5
  //  }

//if(keyDown("UP")){
  //  space1.velocityY = -2;
//}
if(keyDown("space")&&space1.y>=150){
    space1.velocityY =-2;
}
space1.velocityY = space1.velocityY+0.5;

    background.velocityX = -3;
   if(space1.x>700){
       space1.x = -250;
   }
    
    obstacles();

    space1.collide(invisibleground)


    drawSprites()


}

function obstacles(){
    if(frameCount%60 === 0){
        var asteroid=createSprite(400,50,10,10)
    asteroid.velocityX = -3;
    asteroid.scale = 0.2;
     var rand = Math.round(random(1,2))
     switch(rand){
         case 1:asteroid.addImage(asteroidImage);
         if(asteroid1>0){
            asteroid1 = 0
            asteroid1 = randomnumbers(0,700)
        }
                break;
         case 2:asteroid.addImage(asteroidImage1);
         if(asteroid>0){
            asteroid = 0
            asteroid = randomnumbers(0,700)
        }
                break;
                default:break
     }
    
   
    } 
}