import React from 'react'

function Game({stateMutate}) {
  return (
    <div>
        <h1>Game</h1>
        <button onClick={() => stateMutate("LEADER")}>Win</button>
        <button onClick={() => stateMutate("LOSE")}>Lose</button>
    </div>
  )
}

export default Game