// I need to create a function that puts the dot on random tile
//i need a way to make what goes there a dot and not a character.
// I need a timer that after the element is placed, the game counts down 2 seconds and then runs the function again.
//I need a way to start the game. a start button.

let game = {
  columns: ['a', 'b', 'c', 'd', 'e'],
  rows: ['1', '2', '3', '4', '5'],
  currentPosition: [],
  currentScore: 0,
  turnCount: [],
  started: false,
  strikes: 0
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
function dotStartTile() {
  let column = game.columns[getRandomInt(5)]
  let row = game.rows[getRandomInt(5)]

  let className = row + ' ' + column

  let compChoice = document.getElementsByClassName(className)[0]

  // we have now selected for a random positon on the grid compChoice is that position

  // now we need to create a dot in the grid location

  let dot = document.createElement('div')
  dot.setAttribute('class', 'dot')
  compChoice.append(dot)

  setTimeout(() => {
    newDotLocation(dot)
    console.log('Delayed for 2 seconds.')
  }, 2000)

  // now we have created a dot in a random grid position - now we need the function to wait 2 seconds and then delete this dot and create another dot
  //(preferably create the dot somewhere else)
}

// make a game intializor

let startGame = document.querySelector('.startButton')

startGame.onclick = function () {
  if (game.started === false) {
    game.started = true
    dotStartTile()
  }
}

function newDotLocation(dot) {
  game.strikes++
  document.getElementsByClassName('strikes')[0].innerHTML = game.strikes
  let column = game.columns[getRandomInt(5)]
  let row = game.rows[getRandomInt(5)]

  let newClassLocation = row + ' ' + column

  let compChoice = document.getElementsByClassName(newClassLocation)[0]

  compChoice.append(dot)
  if (game.strikes != 3) {
    setTimeout(() => {
      newDotLocation(dot)
      console.log('you did not hit the dot in time')
    }, 2000)
  } else {
    setTimeout(() => {
      alert('sorry you lost. Reload the page to play again')
    }, 200)
  }
}
