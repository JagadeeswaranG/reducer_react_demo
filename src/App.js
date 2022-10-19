import React, { useReducer } from "react";
import "./App.css";
import Game from "./Game";
import Leader from "./Leader";
import Lose from "./Lose";
import Welcome from "./Welcome";
import Win from "./Win";

function reducer(state, action) {
  switch (action.type) {
    case "WELCOME":
      return {
        ui: "WELCOME",
      };
    case "GAME":
      return {
        ui: "GAME",
      };
    case "WIN":
      return {
        ui: "WIN",
      };
    case "LEADER":
      return {
        ui: "LEADER",
      };
    case "LOSE":
      return {
        ui: "LOSE",
      };

    default:
      return state;
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, { ui: "WELCOME" });
  let stateMutate = (action) => {
    dispatch({ type: action });
  };
  return (
    <div className="App">
      {state.ui === "WELCOME" ? <Welcome stateMutate={stateMutate} /> : null}
      {state.ui === "GAME" ? <Game stateMutate={stateMutate} /> : null}
      {state.ui === "WIN" ? <Win stateMutate={stateMutate} /> : null}
      {state.ui === "LOSE" ? <Lose stateMutate={stateMutate} /> : null}
      {state.ui === "LEADER" ? <Leader stateMutate={stateMutate} /> : null}
    </div>
  );
}

export default App;
