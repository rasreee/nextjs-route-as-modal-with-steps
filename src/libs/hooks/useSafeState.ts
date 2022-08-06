import type { Dispatch, SetStateAction } from "react"
import { useCallback, useState } from "react"

import { useIsMounted } from "./useIsMounted"

export function useSafeState<StepState>(
  initialState: StepState | (() => StepState)
): [StepState, Dispatch<SetStateAction<StepState>>]
export function useSafeState<StepState = undefined>(): [
  StepState | undefined,
  Dispatch<SetStateAction<StepState | undefined>>
]

/**
 * Like `useState` but its state setter is guarded against sets on unmounted component.
 */
export function useSafeState<StepState>(
  initialState?: StepState | (() => StepState)
): [StepState | undefined, Dispatch<SetStateAction<StepState>>] {
  const [state, setState] = useState(initialState)
  const isMounted = useIsMounted(true)

  return [
    state,
    useCallback((value) => {
      if (isMounted()) setState(value as StepState)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []) as Dispatch<SetStateAction<StepState>>,
  ]
}
