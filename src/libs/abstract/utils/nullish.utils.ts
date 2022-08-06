import type { Nullish } from "@/libs/abstract/types"

export function isNullish(value: unknown): value is Nullish {
  return !Boolean(value)
}

export function isDefined<T>(value: T): value is NonNullable<T> {
  return !isNullish(value)
}

interface AssertIsDefined {
  <T>(value: T): asserts value is NonNullable<T>
}

export const assertIsDefined: AssertIsDefined = <T>(
  value: T
): asserts value is NonNullable<T> => {
  if (value === undefined || value === null) {
    throw new Error(
      `Expected 'value' to be defined, but received ${
        value as unknown as string
      }`
    )
  }
}
