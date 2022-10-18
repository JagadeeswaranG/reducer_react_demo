import React from 'react'

function Game({gameWin,gameLose}) {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={gameWin}>Win</button>
        <button onClick={gameLose}>Lose</button>
    </div>
  )
}

export default Game