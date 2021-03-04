export const CalculateWinner = (squares: (String|null)[]) => {
  if(!IsGameValid) return null;

  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export const IsGameValid = (squares: (String|null)[]): Boolean => {
  if(squares.length !== 9) return false;
  if(squares.filter(s => { return s!==null && s!=="O" && s!=="X"}).length !== 0) return false;

  const compare = squares.filter(s => {return s==="O"||s==="X" }).reduce((a,b) => { return (b==="O"?1:-1)+a}, 0)
  if (compare > 1 || compare <-1) return false;

  return true;
}