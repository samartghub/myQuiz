var canvas;

var contestantCount, database, question, contestant, quiz;
var gameState = 0;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();

quiz = new Quiz();
quiz.getState();
quiz.start();

}


function draw(){
  background("pink");

  quiz.display();

  if(playerCount === 4){
    quiz.update();
  }

  if(gameState === 1){
    clear();
    quiz.play();
  }
  

  
}
