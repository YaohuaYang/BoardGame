import React, { useState } from 'react';
import './App.css';
import Board from './components/board';
import { CalculateWinner} from './utils/calculateWinner'

const App: React.FC = () => {
  const [history, setHistory] = useState<String[][]>(Array(1).fill(Array(9).fill(null)));
  const [stepNumber, setStepNumber] = useState<number>(0);
  const [xIsNext, setXIsNext] = useState<Boolean>(true);

  const handleClick = (i: number) => {
    const currentHistory = history.slice(0, stepNumber + 1);
    const current = history[stepNumber].slice();
    if (CalculateWinner(current) || current[i]) {
      return
    }
    current[i] = xIsNext ? "X" : "O";
    setStepNumber(stepNumber + 1);
    setXIsNext(!xIsNext);
    setHistory([...currentHistory, current]);
  }

  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext((step % 2) === 0);
  }

  const moves = history.map((step, move) => {
    const desc = move ?
      'Go to move #' + move :
      'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  })

  const current = history[stepNumber];
  const winner = CalculateWinner(current)
  const status = winner ? "Winner: " + winner : "Next player: " + (xIsNext ? "X" : "O");

  return (
    <div className="App">
      <div className="game">
        <div className="game-board">
          <Board
            squares={current}
            onClick={i => handleClick(i)}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <ol>{moves}</ol>
        </div>
      </div>
    </div>
  );
}

export default App;
