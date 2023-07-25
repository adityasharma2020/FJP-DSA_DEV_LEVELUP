import React, { useState } from 'react'
import './Board.css'

const BOARD_SIZE = 10

const Board = () => {
  const array = new Array(BOARD_SIZE)
    .fill(0)
    .map((row) => new Array(BOARD_SIZE).fill(0))
  const [board, setBoard] = useState(array)

  return (
    <div>
      <div className='board'>
        {board.map((row, rowIdx) => (
          <div key={rowIdx} className='row'>
            {row.map((cell, cellIdx) => (
              <div key={cellIdx} className='cell'></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Board
