import React from 'react';
import '../App.css';
//import { playerOne, playerTwo, boardPlayerOne, boardPlayerTwo } from '../gameLoop'
import Player from '../player'
import gameBoard from '../gameBoard'

interface Grid {
  x: number;
  y: number;
}
function Board({ player , board }: { player : Player , board: gameBoard} ) {
  let grid: Grid[][] = [];

  for (let i = 1; i <= 10; i++) {
    const row: Grid[] = [];

    for (let j = 1; j <= 10; j++) {
      row.push({ y: i, x: j });
    }
    grid.push(row);
  }
  return (
    <div className='board'>
      {grid.map((row, y) => (
        <div className='row'>
          {row.map((cord, x) => (
              <div className='col' onClick={() => console.log(cord.x, cord.y)}
                  >
              x = {cord.x} , y = {cord.y}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;
