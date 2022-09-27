import React from 'react';
import logo from './logo.svg';
import './App.css';
import Board from './components/Boards';
import Header from './components/Header';
import {
  playerOne,
  playerTwo,
  boardPlayerOne,
  boardPlayerTwo,
} from './gameLoop';


function App() {
  return (
    <>
      <Header />
      <Board player={playerOne} board = {boardPlayerOne} />
      <Board player={playerTwo} board = {boardPlayerTwo} />
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </>
  );
}

export default App;
