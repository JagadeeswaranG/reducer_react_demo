import React from 'react'

function Win({leaderBoard}) {
  return (
    <div>
        <h1>Win</h1>
        <button onClick={leaderBoard}>Leaderboard</button>
    </div>
  )
}

export default Win