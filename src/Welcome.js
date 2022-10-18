import React from 'react'

function Welcome({gameStart}) {
  return (
    <div>
        <h1>Welcome</h1>
        <button onClick={gameStart}>start</button>
    </div>
  )
}

export default Welcome