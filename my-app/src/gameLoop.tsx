// start clicked
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Ship from './ship'
import GameBoard from './gameBoard';
import Player from './player';
import Board from './components/Boards';


function switchTurns() {
    playerOne.playersTurn = !playerOne.playersTurn
    playerTwo.playersTurn = !playerTwo.playersTurn
}
//not computer goes first
export const playerOne = new Player(false, true)
export const playerTwo = new Player(true, false)

//
// const boardPlayerOne = new GameBoard(playerOne)
// const boardPlayerTwo = new GameBoard(playerTwo)
export const boardPlayerOne = new GameBoard()
export const boardPlayerTwo = new GameBoard()

boardPlayerOne.setShipPostions()
boardPlayerTwo.setShipPostions()

while (!boardPlayerOne.checkShipsSunk() && !boardPlayerTwo.checkShipsSunk()) {
    if (playerOne.playersTurn) {
        let xCordStr = prompt('Cordinate X: ')
        let yCordStr = prompt('Coordinate Y: ')
        let xCord = Number(xCordStr)
        let yCord = Number(yCordStr)
        boardPlayerTwo.recieveAttack([xCord, yCord])
        
    }
    else if (playerTwo.playersTurn) {
        let xCordStr = prompt('Cordinate X: ')
        let yCordStr = prompt('Coordinate Y: ')
        let xCord = Number(xCordStr)
        let yCord = Number(yCordStr)
        boardPlayerOne.recieveAttack([xCord, yCord])
    }
    switchTurns()
}

// playerOne.gameBoard.setShipPostions()
// playerTwo.gameBoard.setShipPostions()
// Solution if there were more boards?
// const boards: Object[] = [boardPlayerOne, boardPlayerTwo]
// boards.forEach(board => {
//     board.setShipPositions()
// });






//playerOne.gameBoard.recieveAttack()