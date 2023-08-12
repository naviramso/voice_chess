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

  return (
    <div className="App">
      <Header />
      <div className="container">
        <Player nombre="José" color="b" turnInfo={turnInfo} />
        <Clock />
        <Board setTurnInfo={setTurnInfo}/>
        <Player nombre="Juan" color="w" turnInfo={turnInfo}/>
        <Clock />
      </div>
      <Footer />
    </div>
  );
}

export default App;
