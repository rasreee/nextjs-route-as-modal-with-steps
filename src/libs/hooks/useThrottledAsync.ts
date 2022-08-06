import type { AsyncResolver } from "@/libs/abstract/types"
import { createAsyncState } from "@/libs/abstract/utils"

import type { UseAsyncResult } from "./useAsync"
import { useThrottledState } from "./useThrottledState"

export type UseThrottledAsyncParams = {
  delay?: number
}

export const useThrottledAsync = <Result = any>(
  delay: number
): UseAsyncResult<Result> => {
  const [state, setState] = useThrottledState(createAsyncState<Result>(), delay)

  const resolve: AsyncResolver<Result> = async (promise) => {
    setState((prev) => ({ ...prev, isRequesting: true }))
    try {
      const result = await promise
      setState({ data: result, error: null, isRequesting: false })
    } catch (error) {
      setState({ error: error as Error, data: null, isRequesting: false })
    }
  }

  const methods = { resolve }

  return [state, methods]
}
