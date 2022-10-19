import React from 'react'

function Lose({stateMutate}) {
  return (
    <div>
        <h1>Lose</h1>
        <button onClick={() => stateMutate("GAME")}>Start Again</button>
    </div>
  )
}

export default Lose