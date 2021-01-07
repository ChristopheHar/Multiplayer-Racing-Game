var form,player,game;
var gameState=0;
var playerCount;
var database;
var allPlayers;
var cars,car1,car2,car3,car4;
var track1, car1Image,car2Image,car3Image,car4Image;
function preload()
{
    track1=loadImage("images/images/track.jpg");
    car1Image=loadImage("images/images/car1.png");
    car2Image=loadImage("images/images/car2.png");
    car3Image=loadImage("images/images/car3.png");
    car4Image=loadImage("images/images/car4.png");
}

function setup(){
    createCanvas(windowWidth-50,windowHeight-150);
    
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw(){
    if (playerCount==4)
    {
        game.update(1);
    }
    if (gameState==1)
    {
        clear();
        game.play();
    }
    if (gameState==2)
    {
        game.end();
    }
    
    drawSprites();
}
 
