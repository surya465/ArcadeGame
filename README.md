# Classic Arcade Game Clone Project
     this is useful to me to learn the java script
     improve  the skills in game designing like
           creating the game components, obstacles, moving the components etc
           created a scope for learning game designing
## Table of Contents
     the following files and folder present in this project:
         1. css folder
         2. js folder
         3. images folder
         4. index.html file
         5. README.md file
- [Instructions](#instructions)
    use the arrow keys
      1. right arrow clicks moves right
      2. left arrow clicks moves left
      3. down arrow clicks moves down
      4. top arrow clicks moves top          
- [Contributing](#contributing)

## Instructions

Use this [rubric](https://review.udacity.com/#!/rubrics/15/view) for self-checking your submission.

Make sure the functions you write are **object-oriented** - either class functions (like `Player` and `Enemy`) or class prototype functions such as `Enemy.prototype.checkCollisions`. Also make sure that the keyword `this` is used appropriately within your class and class prototype functions to refer to the object the function is called upon.

Your **README.md** file should be updated with instructions on both how to 1. Run and 2. Play your arcade game.

For detailed instructions on how to get started, check out this [guide](https://docs.google.com/document/d/1v01aScPjSWCCWQLIpFqvg3-vXLH2e8_SZQKC8jNO0Dc/pub?embedded=true).

## Contributing

This repository is the starter code for _all_ Udacity students. Therefore, we most likely will not accept pull requests.\





#  WHAT I DONE I THIS Project

 1. downloaded the game zip file from the https://github.com/udacity/frontend-nanodegree-arcade-game

#ADDING PLAYER:  player class:line:52       player position:line:64
    Added the player class  added the player image('images/char-horn-girl.png') and initially set its
    position to x=200 and y=400 position.
#MOVING PLAYER ON THE CANVAS: line:116 to 137
    after setting the position moving the player using keyboard keys
          1. right arrow clicks moves right
          2. left arrow clicks moves left
          3. down arrow clicks moves down
          4. top arrow clicks moves top
    in the Player.handleInput() method used the switch case
    in that set limit of the player not to cross over the canvas
    and also set the step length along x and y axis
#ADDING ENEMIES:  added enemies:line:141 to 147   moving speed:line:18 to 21
      declared an array called allEnemies[];
      declared a variable called Enemy
      declared positions of the array called positions
      set the positions of the enemies at the random positions in the canvas        
      added the speed of the enemies which are moving randomly
#COLLISIONS:  line:24-25
      added the logical condition using if
      in that four conditions:
                1. right(player)-left(enemy) collision
                2. down(player)-top(enemy) collision
                3. right(enemy)-left(player) collision  
                4. down(enemy)-top(player) collision
      if the above collision occur player set to initial position
#ADDING SCORE LIVES AND LEVEL
      a. using the canvas element context (ctx) added the score ,level and lives on the canvas
              line: 87,88,92
      b. added some backgrounds using the canvas element ctx
              line: 81-107     
    1. SCORE: line-69
            if the player reaches the top increment by 100
    2. LIVES: line-30
            if the player touches the enemies lives decremented by 1
    3. LEVEL:  line-74
             if the reaches the top level incremented by 1


#RESETING THE GAME:  line:32-40
   if the player lives equal to Zero
         alert says game over
          level set to Zero
          score set to Zero
          lives set to 3
