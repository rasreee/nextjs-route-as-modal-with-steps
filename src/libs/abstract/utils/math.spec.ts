import { round } from "./math.utils"

beforeEach(() => {
  global.console = global.muteConsole()
})

describe("round", () => {
  type TestCase = [number, number | undefined, number]

  const cases: TestCase[] = [
    [0.777, 1, 0.8],
    [0.846, 2, 0.85],
    [0.8, undefined, 1],
    [0.8, 0, 1],
    [0.8, 3, 0.8],
    [0.8, -1, 1],
  ]

  it.each(cases)(
    "round(value: %d, fractionDigits: %d) => %d",
    (value, fractionDigits, expected) => {
      expect(round(value, fractionDigits)).toEqual(expected)
    }
  )
})
