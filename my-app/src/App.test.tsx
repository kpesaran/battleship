import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Ship from './ship'


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('ship size four, sinks cause all positions hit', () => {
  const ship1 = new Ship(4, undefined, 'testShip')
  ship1.baseCase()
  //need to manuallly call hit, in order
  //[1,1],[1,2],[1,3],[1,4]
  ship1.hit([1, 1])
  ship1.hit([1, 2])
  ship1.hit([1, 3])
  ship1.hit([1, 4])
  // comparing reference, but they are in the same position in the heap, it is because strings are immutable 
  const position = JSON.stringify(ship1.boardPosition?.sort())
  // eslint-disable-next-line jest/valid-expect
  expect(JSON.stringify([...ship1.hitPositions].sort()) === position)
  expect(ship1.isSunk()).toBe(true)
})
