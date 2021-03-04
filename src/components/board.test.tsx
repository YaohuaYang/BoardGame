import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Board from "./board"

test("render component correctly", () => {
  const squares = ["O", "O", "X", "X", "O", "O", "O", "X", "X"]
  const onClick = jest.fn();
  render(<Board squares={squares} onClick={onClick}/>)

  expect(screen.getAllByTestId("square-0")[0]).toHaveTextContent("O")
  expect(screen.getAllByTestId("square-8")[0]).toHaveTextContent("X")
})
