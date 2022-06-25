import React, { useState } from "react";
import Board from "./Board";

function Game({ channel }) {
  const [result, setResult] = useState({ winner: "none", state: "none" });

  const [playersJoined, setPlayersJoined] = useState(
    channel.state.watcher_count === 2
  );

  channel.on("user.watching.start", (event) => {
    setPlayersJoined(event.watcher_count === 2);
  });
  if (!playersJoined) {
    return <div> Waiting for other player to join ...</div>;
  }
  return (
    <div className="tic-tac-toe-container">
      <Board result={result} setResult={setResult} />
    </div>
  );
}

export default Game;
