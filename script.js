// I need to create a function that puts the dot on random tile
//i need a way to make what goes there a dot and not a character.
// I need a timer that after the element is placed, the game counts down 2 seconds and then runs the function again.
//I need a way to start the game. a start button.

let game = {
  columns: ['a', 'b', 'c', 'd', 'e'],
  rows: ['1', '2', '3', '4', '5'],
  currentPosition: [],
  currentScore: 0,
  oldScore: 0,
  turnCount: [],
  started: false,
  strikes: 0
}

// defining global variables
let dot = document.createElement('div')
dot.setAttribute('class', 'dot')
let startGame = document.querySelector('.startButton')

// getting random number
function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}

function newDotLocation(dot) {
  let column = game.columns[getRandomInt(5)]
  let row = game.rows[getRandomInt(5)]

  let newClassLocation = row + ' ' + column

  let compChoice = document.getElementsByClassName(newClassLocation)[0]

  let oldScore = game.currentScore

  compChoice.append(dot)
  if (game.strikes != 3) {
    setTimeout(() => {
      if (oldScore === game.currentScore) {
        game.strikes++
        document.getElementsByClassName('strikes')[0].innerHTML = game.strikes
        newDotLocation(dot)
        console.log('you did not hit the dot in time')
      }
    }, 2000)
  } else if (game.strikes === 3) {
    setTimeout(() => {
      alert('sorry you lost. Reload the page to play again')
    }, 200)
  }
}

// Event Listeners
startGame.onclick = function () {
  if (game.started === false) {
    game.started = true
    newDotLocation(dot)
  }
}

dot.onclick = function () {
  if (game.started === true) {
    game.currentScore++
    document.getElementsByClassName('score')[0].innerHTML = game.currentScore
    newDotLocation(dot)
  }
}

// to do

//set up old score

// add player click on dot thing

// might be an issue since dot has not been created? although it exists so I think we are fine?
