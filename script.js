// Start page code

// Game Page Code
let game = {
  columns: ['a', 'b', 'c', 'd', 'e'],
  rows: ['1', '2', '3', '4', '5'],
  currentPosition: [],
  currentScore: 0,
  oldScore: 0,
  turnCount: 0,
  started: false,
  strikes: 0,
  timeInterval: '2000'
}

// defining global variables
let dot = document.createElement('div')
dot.setAttribute('class', 'dot')
let startGame = document.querySelector('.startButton')
let restart = document.querySelector('.restart')
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

  game.turnCount++
  console.log(game.turnCount)

  switch (game.currentScore) {
    case 5:
      game.timeInterval = '1500'
      break
    case 10:
      dot.style.width = '30%'
      dot.style.paddingBottom = '30%'
      dot.style.backgroundColor = '#81B29A'
      break
    case 15:
      game.timeInterval = '1250'
      break
    case 20:
      dot.style.width = '25%'
      dot.style.paddingBottom = '25%'
      dot.style.backgroundColor = 'orange'
      break
    case 25:
      game.timeInterval = '1000'
      break
    case 30:
      dot.style.width = '20%'
      dot.style.paddingBottom = '20%'
      dot.style.backgroundColor = 'magenta'
      break
    case 35:
      game.timeInterval = '900'
      break
    case 40:
      dot.style.width = '15%'
      dot.style.paddingBottom = '15%'
      dot.style.backgroundColor = 'black'
      break
    case 50:
      game.timeInterval = '800'
      dot.style.backgroundColor = 'white'
      dot.innerHTML = '*'
      break
  }

  compChoice.append(dot)
  if (game.strikes != 3) {
    setTimeout(() => {
      if (oldScore === game.currentScore) {
        game.strikes++
        document.getElementsByClassName('strikes')[0].innerHTML = game.strikes
        newDotLocation(dot)
        console.log('you did not hit the dot in time')
      }
    }, game.timeInterval)
  } else if (game.strikes === 3) {
    setTimeout(() => {
      alert('sorry you lost. Click "Restart" to play again')
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

restart.onclick = function () {
  if (game.started === true) {
    game.started = false // i know these are pointless for now, but I am keeping them in case I decide to have a reset button that does not reload the page.
    location.reload()
  }
}
