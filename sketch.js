var canvas , backgroundIMG;
var gameState= 0;
var votersCount;
var allVoters

var database;

var form , game , voter;


function setup(){
    var canvas = createCanvas(1200,400);
    database = firebase.database;
    game = new Game();
    game.getState();
    game.start();
};

    function draw(){
       if(voterCount === 4){
           game.update(1);

       }
       if(gameState === 1){
           clear();
           game.play();
       }
       
    }