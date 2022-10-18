import './App.css';
import { useState } from 'react';
import Welcome from './Welcome';
import Game from './Game';
import Win from './Win';
import Lose from './Lose';
import Leader from './Leader';

function App() {
  const [welcome,setWelcome] = useState(true)
  const [game,setGame] = useState(false)
  const [win,setWin] = useState(false)
  const [lose,setLose] = useState(false)
  const [leader,setLeader] = useState(false)

  let gameStart = () =>{
    setGame(true)
    setWelcome(false)
    setLeader(false)
    setLose(false)
  }

  let gameWin = () =>{
    setWin(true)
    setGame(false)
  }
  
  let gameLose = () =>{
    setLose(true)
    setGame(false)
  } 

  let leaderBoard = () =>{
    setLeader(true)
    setWin(false)
  }
  return (
    <div className="App">
      {
        welcome ? <Welcome gameStart={gameStart}/> : null
      }
      {
        game ? <Game gameWin={gameWin} gameLose={gameLose}/> : null
      }
      {
        win ? <Win leaderBoard={leaderBoard}/> : null
      }
      {
        lose ? <Lose gameStart={gameStart}/> : null
      }
      {
        leader ? <Leader gameStart={gameStart}/> : null
      }
    </div>
  );
}

export default App;
