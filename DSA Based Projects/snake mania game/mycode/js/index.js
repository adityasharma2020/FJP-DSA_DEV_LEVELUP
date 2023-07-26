// game constants and variables
let direction = { x: 0, y: 0 }
const foodSound = new Audio('music/food.mp3')
const gameOverSound = new Audio('music/gameover.mp3')
const moveSound = new Audio('music/move.mp3')
const musicSound = new Audio('music/music.mp3')
let speed = 2
let lastPaintTime = 0
let snakeArr = [{ x: 5, y: 10 }]
let board = document.getElementById('board')
let food = { x: 6, y: 7 }

//game functions
function main(currentTime) {
  window.requestAnimationFrame(main)

  if (currentTime - lastPaintTime / 1000 < 1 / speed) {
    return
  }

  lastPaintTime = currentTime
  gameEngine()
}

function gameEngine() {
  // part1 : updating the snake arrray

  //part 2: render the snake and food
  board.innerHTML = ''
  //   display snake
  snakeArr.forEach((e, index) => {
    snakeElement = document.createElement('div')
    snakeElement.style.gridRowStart = e.y
    snakeElement.style.gridColumnStart = e.x
    if (index === 0) {
      snakeElement.classList.add('head')
    } else {
      snakeElement.classList.add(`snake`)
    }
    board.appendChild(snakeElement)
  })

  //   display food
  foodElement = document.createElement('div')
  foodElement.style.gridRowStart = food.y
  foodElement.style.gridColumnStart = food.x
  foodElement.classList.add(`food`)
  board.appendChild(foodElement)
}

// to render our screen
window.requestAnimationFrame(main)
window.addEventListener('keydown', (e) => {
  inputDir = { x: 0, y: 1 } // Start the game
  moveSound.play()

  switch (e.key) {
    case 'ArrowUp':
      console.log('ArrowUp')
      inputDir.x = 0
      inputDir.y = -1
      break

    case 'ArrowDown':
      console.log('ArrowDown')
      inputDir.x = 0
      inputDir.y = 1
      break

    case 'ArrowLeft':
      console.log('ArrowLeft')
      inputDir.x = -1
      inputDir.y = 0
      break

    case 'ArrowRight':
      console.log('ArrowRight')
      inputDir.x = 1
      inputDir.y = 0
      break
    default:
      break
  }
})
