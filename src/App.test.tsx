import React from 'react';
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom";
import App from './App';


describe('App', () => {

  test('renders component correctly', () => {
    render(<App />);
    const linkElement = screen.getByText(/Go to game start/i);
    expect(linkElement).toBeInTheDocument();
    expect(screen.getAllByTestId("move-0")[0]).toHaveTextContent("Go to game start")
    expect(screen.getAllByTestId("next-player")[0]).toHaveTextContent("Next player: X")
  });
  
  test('click screen works', () => {
    render(<App />);
    const space = screen.getAllByTestId("square-0")[0];
    space.click();
    expect(space).toHaveTextContent("X");
    expect(screen.getAllByTestId("move-1")[0]).toHaveTextContent("Go to move #1");
    expect(screen.getAllByTestId("next-player")[0]).toHaveTextContent("Next player: O")
  });

  test('click to someone win', () => {
    render(<App />);
    screen.getAllByTestId("square-0")[0].click();
    screen.getAllByTestId("square-1")[0].click();
    screen.getAllByTestId("square-3")[0].click();
    screen.getAllByTestId("square-4")[0].click();
    screen.getAllByTestId("square-6")[0].click();
    expect(screen.getAllByTestId("next-player")[0]).toHaveTextContent("Winner: X")
  });

  test('history work', () => {
    render(<App />);
    screen.getAllByTestId("square-0")[0].click();
    screen.getAllByTestId("square-1")[0].click();
    screen.getAllByTestId("square-3")[0].click();
    screen.getAllByTestId("square-4")[0].click();
    screen.getAllByTestId("square-6")[0].click();
    screen.getAllByTestId("move-0")[0].click();
    expect(screen.getAllByTestId("square-0")[0]).toBeEmptyDOMElement()
  });
});
