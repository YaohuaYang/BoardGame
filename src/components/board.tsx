import React, { useState } from 'react';

interface Props {
  squares: String[];
  onClick: (i: number) => void;
}

const Board = ({squares, onClick}: Props) => {
  const renderSquare = (i: number) => {
    return (
      <button className="square" onClick={ () => onClick(i)}>
        {squares[i]}
      </button>
    );
  }
  return (
    <div>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>
  );
}

export default Board;