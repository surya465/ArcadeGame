"use strict"
var Enemy = function(x,y,speed) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
   this.x=x;
   this.y=y;
   this.speed=speed;
   this.sprite='images/enemy-bug.png';
};
// var Star =function(x,y,spped){
//   this.x=x;
//   this.y=y;
//   this.speed=speed;
//
// }
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
     this.x+=this.speed*dt;
    if(this.x>550){
      this.x=-100;
      this.speed=100+Math.floor(Math.random()*512);
    }
    //checking collision with the player
    if(player.x<this.x+60 &&player.x+37>this.x &&
      player.y<this.y+25&&30+player.y>this.y){
        // if collision occur player position set to initial
        player.x=200;
        player.y=400;
        //decrement the lives of the player every time player collision with enemy
        player.playerLives-=1;
        // if the player lives =0 the condition
        if(player.playerLives==0){
          // alert message if the game is over
          alert("GAME OVER"+"\n"+"SCORE:"+player.playerScore+"\n"+"\t\t\tpress ENTER to play the game\t\t\t");
          //player lives reset to 3
          player.playerLives=3;
          // player score reset to 0
          player.playerScore=0;
          //player level reset to 0
          player.playerLevel=0;
        }
      }
 };

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player=function (x,y) {
  this.x= x;
  this.y=y;
  this.sprite='images/char-horn-girl.png';
  //initally player score set to 0
  this.playerScore=0;
  //initially player lives set to 3
  this.playerLives=3;
  // initially taking starting level equals to 0
  this.playerLevel=0;
};
// initially taking the starting position of the player
var player=new Player(200,400);
Player.prototype.update=function () {
  // condition if the player reaches the water
  if(this.y<-50){
    // score of the player incremented by 100 if the player reaches water
    this.playerScore+=100;
    //setting to the initial position after reaching water
    player.x=200;
    player.y=400;
    //Incrementing the level if the player reaches water
    this.playerLevel+=1;
  }
};
//drawing the player on the screen ,this is the required method
Player.prototype.render=function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
  //adding yellow box on the top of screen
    ctx.fillStyle="yellow";
    ctx.fillRect(2,13,550,32);
    ctx.fillRect(2,550,550,32);
  //adding the text to display the score
    ctx.fillStyle = "darkred";
    ctx.font = "30px Impact";
    ctx.fillText("Score: " + player.playerScore, 5, 40);
    ctx.fillText("Lives: " + player.playerLives, 410, 40);
//adding the text to display the player lives
    ctx.fillStyle= "navy"
    ctx.font="25px Impact";
    ctx.fillText("Level: " + player.playerLevel, 210, 580);
//adding the text to display the level
    ctx.strokeStyle="gray";
    ctx.lineWidth=4;
    ctx.font="30px Impact";
    ctx.strokeText("MY GAME",200,40);
//adding the text to display the stroke heading on the top
    ctx.lineWidth=4;
    ctx.strokeStyle="red";
    ctx.strokeRect(-2,13,550,32);
    ctx.strokeStyle="darkred";
    ctx.strokeRect(2,550,502,35);
//adding the text to display the  heading on the top without stroke
    ctx.fillStyle= "darkred";
    ctx.font="30px Impact";
    ctx.fillText("MY GAME",200,40);
};

// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player


// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
// moving the player according to key pressed
Player.prototype.handleInput=function (keys) {
 switch(keys) {
  case "left":
     if(this.x>0){
       this.x -=100;
     }
  break;
  case "right":
     if(this.x<400){
       this.x +=100;
     }
  break;
  case "up":
     if(this.y>-50){
       this.y -=85;
     }
  break;
  case "down":
     if(this.y<400){
       this.y +=85;
     }
  break;
}
};
// placing the enemy objects in the array called allEnemies
 var allEnemies=[];
 var enemy;
 var positions=[60,140,220];
 positions.forEach(function (positionY) {
   enemy=new Enemy(0,positionY,100+Math.floor(Math.random()*512));
   allEnemies.push(enemy);
 });
 //setting the keys in the keyboard
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
