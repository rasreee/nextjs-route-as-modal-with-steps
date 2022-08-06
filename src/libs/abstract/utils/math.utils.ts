import { isNegative, isPositiveInteger } from "@/libs/abstract/utils"

export const round = (value: number, fractionDigits?: number): number => {
  if (isNegative(fractionDigits)) {
    console.warn(
      "Passed negative number to round(). Rounding to nearest integer instead."
    )
  }

  const fixedValue = value
    .toFixed(isPositiveInteger(fractionDigits) ? fractionDigits : 0)
    .valueOf()

  return parseFloat(fixedValue)
}
