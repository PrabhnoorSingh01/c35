
var database;
var canvas,backgroundImg,playerCount;
var form,player,game
var gameState=0
function setup(){
    database=firebase.database()
    createCanvas(500,500);
    game=new Game()
    game.gameState()
    game.start()

}


function draw(){
    background("white");
    
    drawSprites();
}
