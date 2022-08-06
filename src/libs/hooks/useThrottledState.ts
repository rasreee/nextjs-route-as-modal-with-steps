import type { Dispatch, SetStateAction } from "react"

import { DEFAULT_DELAY_MS } from "./_lib/const"
import { useSafeState } from "./useSafeState"
import { useThrottledCallback } from "./useThrottledCallback"

/**
 * Like `useSafeState` but its state setter is throttled.
 *
 * @param initialState Initial state to pass to underlying `useSafeState`.
 * @param delay Throttle delay.
 * @param noTrailing If `noTrailing` is true, callback will only promise every
 * `delay` milliseconds, otherwise, callback will be executed one final time
 * after the last throttled-function call.
 */
export function useThrottledState<StepState>(
  initialState: StepState | (() => StepState),
  delay: number = DEFAULT_DELAY_MS,
  noTrailing = false
): [StepState, Dispatch<SetStateAction<StepState>>] {
  const [state, setState] = useSafeState(initialState)

  return [state, useThrottledCallback(setState, [], delay, noTrailing)]
}
