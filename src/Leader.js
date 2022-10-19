import React from 'react'

function Leader({stateMutate}) {
  return (
    <div>
        <h1>LeaderBoard</h1>
        <button onClick={() => stateMutate("GAME")}>Start Again</button>
    </div>
  )
}

export default Leader