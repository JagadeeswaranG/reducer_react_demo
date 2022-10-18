import React from 'react'

function Leader({gameStart}) {
  return (
    <div>
        <h1>LeaderBoard</h1>
        <button onClick={gameStart}>Start Again</button>
    </div>
  )
}

export default Leader