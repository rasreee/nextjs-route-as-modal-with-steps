import type { AsyncState } from "@/libs/abstract/types"
import { isDefined } from "@/libs/abstract/utils"

export function createAsyncState<Result = any>(): AsyncState<Result> {
  return { isRequesting: false }
}

export function isSuccessState<Result>({
  error,
  data,
  isRequesting,
}: AsyncState<Result>): boolean {
  return !isRequesting && isDefined(data) && error === null
}

export function isFailureState({
  error,
  data,
  isRequesting,
}: AsyncState<any>): boolean {
  return !isRequesting && isDefined(error) && data === null
}
