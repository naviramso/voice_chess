import logo from "./logo.svg";
import "./App.css";
import Board from "./components/Board";
import Header from "./components/Header";
import Player from "./components/Player";
import Clock from "./components/Clock";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {

  const [move, setMove] = useState({from:"", to:"", promotion:"q"});

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Player nombre="José" />
        <Clock />
        <Board voiceMove={move}/>
        <Player nombre="Juan" />
        <Clock />
      </div>
      <Footer setMove={setMove}/>
    </div>
  );
}

export default App;
