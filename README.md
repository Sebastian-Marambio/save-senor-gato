# Save Señor Gato

## Description

Save Señor Gato is a game based on Arcade classic Frogger, a game where you move from the bottom of the screen through different lines of obstacles and jumping onto platforms to get to a box at the top. If you reach a box, the player will restart at the bottom and can try to get to the other boxes. Reaching all three different boxes without losing wins the game. Leaving the screen, getting hit by an obstacle and jumping into the water loses the game.

## MVP (DOM - CANVAS)

- game has a moving character
- different obstacles appear and move
- player can only move vertically in a fixed step
- player can move onto platforms
- platforms move the player
- animation change if player dies / reaches a box
- adjusting a reasonable game difficulty

## Backlog

- add random elements instead of some platforms that have an effect on the player
- add score / high score list

## Data Structure

# game.js

- startGame () {}
- createObst () {}
- drawObst () {}
- drawCat () {}
- drawBoxes () {}
- checkCollision () {}
- drawResult () {}
- animate () {}
- drawTime () {}


## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen
- gameScreen
- gameOverScreen

## Task

- game - startGame
- game - createObst
- game - drawObst
- game - drawCat
- game - drawBoxes
- game - checkCollision
- game - drawResult
- game - drawTime
- game - animate
- game - eventlisteners

## Links

### Trello
[Link url]()

### Git
URls for the project repo and deploy
[Link Repo](https://github.com/Sebastian-Marambio/save-senor-gato)
[Link Deploy]()

### Slides
URls for the project presentation (slides)
[Link Slides.com]()