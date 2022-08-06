import type { MaybePromise } from "@/libs/abstract/types"
import type { IResponse } from "@/libs/api/api.types"

export type AsyncResolver<Result> = (
  promise: Promise<Result>
) => MaybePromise<void>

export type AsyncState<Result = any> = IResponse<Result> & {
  isRequesting: boolean
}

export type AsyncMethods<Result> = {
  resolve: AsyncResolver<Result>
}
