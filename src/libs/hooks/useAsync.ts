import { useState } from "react"

import type {
  AsyncMethods,
  AsyncResolver,
  AsyncState,
} from "@/libs/abstract/types"
import { createAsyncState } from "@/libs/abstract/utils"

export type UseAsyncResult<Result> = [AsyncState<Result>, AsyncMethods<Result>]

export const useAsync = <Result = any>(): UseAsyncResult<Result> => {
  const [state, setState] = useState(createAsyncState<Result>())

  const resolve: AsyncResolver<Result> = (promise) => {
    setState((prev) => ({ ...prev, isRequesting: true }))

    promise
      .then((data) => {
        setState({ data, error: null, isRequesting: false })
      })
      .catch((error) => {
        setState({ error, data: null, isRequesting: false })
      })
  }

  const methods = { resolve }

  return [state, methods]
}
