class Game{
    constructor(){}

    getState(){
        var gameStateRef  = database.ref('gameState')
        gameStateRef.on("value",function(data){
            gameState.data.val();

        })
    }
    update(state){
        database.ref('/').update({
            gameState : state

        });
    }
    async start(){
        if(gameState === 0){
            voter = new Voter();
            var VoterCountRef = database.ref('voterCount').once("value");
            if(VoterCountRef.exists()){
                voterCount= voterCountRef.val();
                voter.getCount();

            }

            form = new Form();
            form.display();
        }
        play();{
            form.hide();
            textSize(20);
            text("Start taking the survey",120,100);
            voter.getVoterInfo();
            if(allVoters !== undefined){
                display_position = 130;
                for(var plr in allVoters ){
                    if(plr === "voter" + voterIndex)
                        fill("red");
                        else
                        fill("black");
                        display_position+=20
                        textSize(15);
                        text(allVoter[plr].name + ": " + allVoters[plr].votes,120,display_position);

 
          
                        
                     }
                }
                if(keyIsDown(UP_ARROW )&& voter.index !== null){
                   voter.votes += 50;
                    voter.update();
                  }
            }

        }
    }

        

