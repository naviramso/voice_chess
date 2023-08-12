import { useEffect, useState } from "react";
import Chess from "chess.js";
import { Chessboard } from "react-chessboard";

export default function Board({ voiceMove,setTurnInfo }) {
  const [game, setGame] = useState(new Chess());
  const makeVoiceMove=()=>{
    console.log(voiceMove);
    let move=makeAMove(voiceMove);
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }
  useEffect(() => {
    makeVoiceMove();
  }, [voiceMove]);

  function makeAMove(move) {
    const gameCopy = { ...game };
    const result = gameCopy.move(move);
    setTurnInfo(result);
    setGame(gameCopy);
    return result; // null if the move was illegal, the move object if the move was legal
  }

  function makeRandomMove() {
    const possibleMoves = game.moves();
    const randomDelay = Math.floor(Math.random() * (5000 - 1000 + 1)) + 1000
    if (game.game_over() || game.in_draw() || possibleMoves.length === 0){
      alert("felicidades has ganado")
      return; // exit if the game is over
    }  
    const randomIndex = Math.floor(Math.random() * possibleMoves.length);
    setTimeout(() => {
      makeAMove(possibleMoves[randomIndex]);
    }, randomDelay);
  }

  function onDrop(sourceSquare, targetSquare) {
    const move = makeAMove({
      from: sourceSquare,
      to: targetSquare,
      promotion: "q", // always promote to a queen for example simplicity
    });
    if (move === null) return false;
    setTimeout(makeRandomMove, 200);
    return true;
  }

  return (
    <div className="board-container">
      <Chessboard customBoardStyle={{ margin: "auto" }}
        boardWidth={350}
        position={game.fen()}
        onPieceDrop={onDrop}
        customDarkSquareStyle={{ backgroundColor: "#888888" }}
        customLightSquareStyle={{ backgroundColor: "#eeeeee" }}
      />
    </div>
  );
}
