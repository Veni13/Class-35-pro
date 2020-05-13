class Voter{
    constructor(){
        this.index = null;
        this.votes = 0;
        this.name = null;
    }
    getCount(){
        var voterCountRef  = database.ref('voterCount');
        voterCountRef.on("value",(data)=>{
            voterCount = data.val();
          })
        
    
        }
        updateCount(count){
            database.ref('/').update({
                playerCount : count

            });

        }
        update(){
            var voterIndex = "voter/voter" + this.index;
            database.ref(voterIndex).set({
              name:this.name,
              votes : this.votes
            });
          }
          static getVoterInfo(){
            var voterInfoRef = database.ref('voters');
            voterInfoRef.on("value",(data)=>{
              allVoters = data.val();
            })
        }

}