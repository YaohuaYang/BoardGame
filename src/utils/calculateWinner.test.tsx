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

test("winner is O", () => {
  const games = [
    ["O", "O", "X", "X", "O", "O", "X", "X", "O"], // 0,4,8
    ["X", "X", "O", "X", null, "O", "O", "X", "O"], // 2,5,8
    ["O", "O", "O", "X", "X", null, null, null, null], // 0,1,2
  ]
  games.forEach(game => {
    expect(CalculateWinner(game)).toEqual("O")
  })
})

test("winner is X", () => {
  const games = [
    ["O", "O", "X", "X", "X", "O", "X", "X", "O"], // 2,4,6
    ["X", "O", null, "X", null, "O", "X", "X", "O"], // 0,3,6
    ["O", "O", null, "X", "X", "X", null, null, null], // 3,4,5
  ]
  games.forEach(game => {
    expect(CalculateWinner(game)).toEqual("X")
  })
})

test("no winner now", () => {
  const games = [
    ["O", "O", "X", "X", null, "O", "X", "X", "O"],
    ["X", "X", "O", "X", null, null, "O", "X", "O"], 
    ["O", "O", null, "X", "X", null, null, null, null], 
  ]
  games.forEach(game => {
    expect(CalculateWinner(game)).toEqual(null)
  })
})