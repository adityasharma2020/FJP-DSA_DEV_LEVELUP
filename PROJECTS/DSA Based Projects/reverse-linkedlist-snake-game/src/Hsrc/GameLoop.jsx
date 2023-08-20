import React from 'react'

const gameLoop = () => {
  function main(ctime) {
    window.requestAnimationFrame(main)
    console.log(ctime)
  }

  window.requestAnimationFrame(main)

  return <div>gameLoop</div>
}

export default gameLoop
