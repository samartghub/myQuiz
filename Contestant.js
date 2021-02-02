class Contestant{
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

      update(){
        var contestantIndex = "contestants/contestant" + this.index;
        database.ref(contestantIndex).set({
          name:this.name,
          distance:this.distance
        });
      }
    
}