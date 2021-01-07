class Game
{
    constructor()
    {

    }
    getState()
    {
        var gameStateRef=database.ref("gameState");
        gameStateRef.on("value",function(data){
            gameState=data.val();
        })
    }
    update(state)
    {
        database.ref("/").update({
            gameState:state
        })
    }
   
    async start()
    {
        if (gameState==0)
        {
           player=new Player();
           var playerCountRef=await database.ref("playerCount").once("value");
           if (playerCountRef.exists())
           {
               playerCount=playerCountRef.val();
               player.getCount();
           }
            form=new Form();
            form.display();
        }
        car1=createSprite(200,displayHeight-300);
        car2=createSprite(350,displayHeight-300);
        car3=createSprite(500,displayHeight-300);
        car4=createSprite(650,displayHeight-300);
        car1.addImage(car1Image);
        car2.addImage(car2Image);
        car3.addImage(car3Image);
        car4.addImage(car4Image);
        cars=[car1,car2,car3,car4];
        car1.visible=false;
        car2.visible=false;
        car3.visible=false;
        car4.visible=false;
    }
    play()
    {
        console.log("hi");
        form.hide();
        textSize(30);
        text("Game Start!", 140, 100);
        Player.getPlayerInfo();
        car1.visible=true;
        car2.visible=true;
        car3.visible=true;
        car4.visible=true;
        if (allPlayers!==undefined)
        {
            background("gray");
            image(track1,0,-displayHeight*4,displayWidth,displayHeight*5);
            var index=0;
            var x=300;
            var y;
            for (var plr in allPlayers)
            {
                index=index+1;
                x=x+200;
                y=displayHeight-allPlayers[plr].distance;
                cars[index-1].x=x;
                cars[index-1].y=y;

                if (index===player.index)
                {
                    cars[index-1].shapeColor="red";
                    camera.position.x=displayWidth/2;
                    camera.position.y=cars[index-1].y;
                }
            }
            if (keyDown(UP_ARROW)&&player.index!==null)
            {
                player.distance+=50;
                player.update();

            }
           

        }
        if (player.distance>=4350)
        {
            gameState=2;
        }
    }
    end()
    {
        console.log("Hello World!");
    }
}