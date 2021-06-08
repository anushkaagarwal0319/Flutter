class Game{
    constructor(){

    }
    getState() {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value", function (data) {
            gameState = data.val();
        })

    }

    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }
    async start() {
            if (gameState === 0) {
                player = new Player();
                var playerCountRef = await database.ref('playerCount').once("value");
                if (playerCountRef.exists()) {
                    playerCount = playerCountRef.val();
                    player.getCount();
                }
                form = new Form()
                form.display();
            }
    player1 = createSprite(200,500);
    player1.addImage("player1",player1_img);
    player1.scale=0.12

    player2 = createSprite(800,500);
    player2.addImage("player2", player2_img);
    player2.scale=0.12

    players=[player1,player2];

        }
    
    play(){
        
                form.hide();

                Player.getPlayerInfo();
                 image(back_img, 0, 0, 1000, 600);
                 var x =100;
                 var y=200;
                 var index =0;
                 drawSprites();
                 for(var plr in allPlayers){
                    
                    
                     index = index+1;
                     x = 500-allPlayers[plr].distance;
                     y=500;
                     
                     players[index -1].x = x;
                     players[index - 1].y = y;
                       
                     if(index === player.index){
                         
                       //add code to display the player's name on the respective basket.
                        textSize(20);
                        fill("black");
                        text(allPlayers[plr].name, x-20, y+25);
                         
                     }
                     textSize(20);
                     fill("purple");
                     text("Player 1 : "+allPlayers.player1.score, 50, 50);
                     text("Player 2 : "+allPlayers.player2.score, 50, 100);

                 
                 }
                
                
                 

                if (keyIsDown(RIGHT_ARROW) && player.index !== null) {
                    player.distance -= 10
                    player.update();
                    console.log("sucess-right")
                }
                if (keyIsDown(LEFT_ARROW) && player.index !== null) {
                    player.distance += 10
                    player.update();
                    console.log("sucess-left")
                }
            
                 if (frameCount % 20 === 0) {
                     butterflies = createSprite(random(100, 1000), 0, 100, 100);
                     butterflies.velocityY = 6;
                     var rand = Math.round(random(1,4));
                     switch(rand){
                         case 1: butterflies.addImage("butterfly1", fly1img);
                         break;
                         case 2: butterflies.addImage("butterfly2", fly2img);
                         break;
                         case 3: butterflies.addImage("butterfly3", fly3img);
                         break;
                         case 4: butterflies.addImage("fruit1", fruit4_img);
                         break;
                     }
                     butterfliesGroup.add(butterflies);
                     
                 }
                 
                  if (player.index !== null) {
                    for (var i = 0; i < butterfliesGroup.length; i++) {
                        if (butterfliesGroup.get(i).isTouching(players)) {
                            butterfliesGroup.get(i).destroy();
                            console.log(butterfliesGroup.get(i));
                            player.score = player.score+1;
                         
                            
                        }
                        
                    }
                  }
                

         
         
        
         

    }

    end(){
       console.log("Game Ended");
    }
}
