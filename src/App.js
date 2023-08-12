import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Player from "./components/Player";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [turnInfo, setTurnInfo] = useState(null);
  const [move, setMove] = useState({from:"", to:"", promotion:"q"});

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Player nombre="José" color="b" turnInfo={turnInfo}  />
        <Board voiceMove={move} setTurnInfo={setTurnInfo}/>
        <Player nombre="Juan" color="w" turnInfo={turnInfo} />
      </div>
      <Footer setMove={setMove}/>
    </div>
  );
}

export default App;
