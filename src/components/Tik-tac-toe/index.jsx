import { useState } from "react";
import { useEffect } from "react";
import "./style.css";

//create a function that updates the squares

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="squares">
      {value}
    </button>
  );
}

//create a default function and remember to export
export default function TicTacToe() {
  //set state using use state
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  //create a function that will store the winning pattern
  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];

      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x];
      }
      
    }
    return null;
  }
  // handles when the user clicks
  function handleClick(getCurrentSquare) {
    let cpySquares = [...squares];
    if ( cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !=="")) {
      setStatus(`this is a draw !Please restart`)
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}`);
    } else {
      setStatus(`Next Player is ${isXTurn ? "X" : "0"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-tac-toe">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1>{status}</h1>
    </div>
  );
}
