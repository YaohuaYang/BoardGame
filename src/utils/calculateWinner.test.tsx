import { CalculateWinner, IsGameValid } from './calculateWinner'

test("these games are valid", () => {
  const games = [
    ["O", "O", "X", "X", "O", "O", "O", "X", "X"],
    ["X", "X", "X", "O", "O", "O", "X", "O", "X"],
    ["O", null, null, null, "X", null, null, null, "O"],
  ];
  games.forEach(game => {
    expect(IsGameValid(game)).toEqual(true)
  })
})

test("these games shouldn't start due to incorrect board length", () => {
  const games = [
    ["O", "X", "O", "X", "O", "X", "O", "X"],
    ["O", "X", "O", "X", "O", "X", "O", "O", "X", "X"],
    ["O"],
  ];
  games.forEach(game => {
    expect(IsGameValid(game)).toEqual(false)
  })
})

test("these games shouldn't start due to invalid play", () => {
  const games = [
    ["1", "1", "X", "X", "O", "O", "O", "O", "X"],
    ["X", "X", "WQ", "O", "O", "X", "X", "X", "X"],
    ["O", null, null, null, "OX", null, null, null, "O"],
  ]
  games.forEach(game => {
    expect(IsGameValid(game)).toEqual(false)
  })
})

test("these games shouldn't start due to inbalance play", () => {
  const games = [
    ["O", "O", "X", "X", "O", "O", "O", "O", "X"],
    ["X", "X", "X", "O", "O", "X", "X", "X", "X"],
    ["O", null, null, null, "O", null, null, null, "O"],
  ]
  games.forEach(game => {
    expect(IsGameValid(game)).toEqual(false)
  })
})

