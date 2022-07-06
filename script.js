// I need to create a function that puts the dot on random tile
//i need a way to make what goes there a dot and not a character.
// I need a timer that after the element is placed, the game counts down 2 seconds and then runs the function again.
//I need a way to start the game. a start button.

let game = {
  columns: ['a', 'b', 'c', 'd', 'e'],
  rows: ['1', '2', '3', '4', '5'],
  currentPosition: [],
  currentScore: 0,
  turnCount: []
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max)
}
function dotNewTile() {
  let column = game.columns[getRandomInt(5)]
  let row = game.rows[getRandomInt(5)]

  let className = row + ' ' + column

  let compChoice = document.getElementsByClassName(className)[0]

  // we have now selected for a random positon on the grid compChoice is that position

  // now we need to create a dot in the grid location

  let dot = document.createElement('div')
  dot.setAttribute('class', 'dot') //we might make this an ID
  compChoice.append(dot) //make sure this is correct.

  // extra old code

  // if (compChoice.innerText != 'x' && compChoice.innerText != 'o') {
  //   compChoice.innerText = computer.selection
  //   game.turnCount.push('i')
  //   let tOrder = document.querySelectorAll('.turnOrder')[0]
  //   tOrder.innerText = 'Your turn.'
  //   computer.turn = false
  //   setTimeout(checkLoss, '50')
  // } else if (game.turns.length > 8) {
  //   console.log('last turn')
  // } else {
  //   computerChoice()
  // }
}
