import isNumber from "lodash.isnumber"

export function isNegative(value: unknown): boolean {
  return isNumber(value) && value < 0
}

export function isPositiveInteger(value: unknown): value is number {
  return isNumber(value) && !isNegative(value)
}
