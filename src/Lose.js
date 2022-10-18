import React from 'react'

function Lose({gameStart}) {
  return (
    <div>
        <h1>Lose</h1>
        <button onClick={gameStart}>Start Again</button>
    </div>
  )
}

export default Lose