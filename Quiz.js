class Quiz {
    constructor(){
        this.index = null;
        //this.distance=0;
        this.name = null;
    }
    getCount(){
        var contestantCountRef = database.ref('contestantCount');
        contestantCountRef.on("value",function(data){
          contestantCount = data.val();
        })
      }

      //update(){
        //var contestantIndex = "contestants/contestant" + this.index;
        //database.ref(contestantIndex).set({
         // name:this.name,
          //distance:this.distance
        //});
      
  
      update(state){ 
        database.ref('/').update({ gameState: state });
       }

       async start(){
        if(gameState === 0){
          contestant = new Contestant();
          var contestantCountRef = await database.ref('contestantCount').once("value");
          if(playerCountRef.exists()){
            contestantCount = contestantCountRef.val();
            contestant.getCount();
          }
          question = new Question()
          question.display();
        }
      }
    
      }


